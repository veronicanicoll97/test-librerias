const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'dw_asesinatos',
    password: '5501034',
    port: 5432,
  }
 
const client = new Client(connectionData)
 
/**
 * 1. Leer el archivo línea por línea.
 * 2. Reemplazar los textos por sus equivalentes en BD.
 * 3. Agregar la columna jk id.
 * 4. Contar los registros con el mismo jk id
 * 5. Insertar en BD
 */
 
const dimensionBasura = async () => {
   try {
    client.connect();

    const datosTablaAuxiliar = await client.query(`SELECT *FROM asesinatos.auxiliar;`)
    const filas = datosTablaAuxiliar.rows
    // console.log(datosTablaAuxiliar);
    let junk_ids = []
  
    for(let i in filas) {
      const {
        body_camera, signs_of_mental_illness, 
        arms_category, threat_level, armed, 
        manner_of_death, flee, name, date, 
        age, gender, race, city, state 
      } = filas[i]
  
      const text = `SELECT jk_id FROM asesinatos.junk_dim WHERE body_camera = $1 AND 
        signs_of_mental_illness = $2
        AND arms_category = $3
        AND threat_level= $4 
        AND armed = $5
        AND manner_of_death = $6
        AND flee = $7;`
      const values = [Boolean(body_camera), Boolean(signs_of_mental_illness), arms_category, threat_level, armed, manner_of_death, flee]
  
      const ids = await client.query(text, values)
      const [jk_id] = ids.rows

      junk_ids.push({name, date, age, gender, race, city, state, ... jk_id})
    }
    // client.end()
  
    return junk_ids   
   } 
   catch (error) {
      console.log(error)
   }
}


const dimensiones = async () => {
  const dims = await dimensionBasura()

  let dimens = []
  for(let i in dims) {
    const {name, date, age, gender, race, city, state, jk_id} = dims[i]

    const text = `SELECT fecha_id FROM asesinatos.dim_fecha WHERE fecha = TO_DATE($1, 'YYYY-MM-DD');`
    const values = [date]
    const fechaEncontrada = await client.query(text, values)
    const [fecha_id] = fechaEncontrada.rows

    const text2 = 'SELECT gender_id FROM asesinatos.dim_gender WHERE gender = $1;'
    const values2 = [gender]
    const generoEncontrado = await client.query(text2, values2)
    const [gender_id] = generoEncontrado.rows

    const text3 = 'SELECT race_id FROM asesinatos.dim_race WHERE race = $1;'
    const values3 = [race]
    const razaEncontrado = await client.query(text3, values3)
    const [race_id] = razaEncontrado.rows

    const text4 = 'SELECT city_id FROM asesinatos.dim_city WHERE city = $1'
    const values4 = [city]
    const ciudad =  await client.query(text4, values4)
    const [city_id] = ciudad.rows

    const text5 = 'SELECT state_id FROM asesinatos.dim_state WHERE state = $1'
    const values5 = [state]
    const estados =  await client.query(text5, values5)
    const [state_id] = estados.rows

    const text6 = 'SELECT id_persona FROM asesinatos.dim_personas WHERE name = $1 AND age = $2;'
    const values6 = [name, age]
    const personas =  await client.query(text6, values6)
    const [id_persona] = personas.rows

    dimens.push({...fecha_id, ...gender_id, ...race_id, ...city_id, ...state_id, ...id_persona, jk_id})
  }

  

  return dimens
}


const auxAsesinatos = async () => {
  const all = await dimensiones()

  for (let i in all) {
    const {fecha_id, gender_id, race_id, city_id, state_id, id_persona, jk_id} = all[i]

    const text = `INSERT INTO asesinatos.hechos_asesinatos (fecha_id, gender_id, race_id, city_id, state_id, id_persona, jk_id) VALUES ($1, $2, $3, $4, $5, $6, $7);`
    const values = [fecha_id, gender_id, race_id, city_id, state_id, id_persona, jk_id]

    await client.query(text, values) 
  }

  client.end()

  return 'OK'
}

 
console.log(auxAsesinatos().then(x => console.log(x)))