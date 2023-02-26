
const xlsx = require("xlsx");
const {readFileSync} = require("fs");
const dayjs = require("dayjs");

//Pasos a tener en cuenta.

// 1. Defino la constante que va recibir mi archivo JSON en bruto.

const archivoDeDatosEnJson = JSON.parse(readFileSync("./response.json", "utf8"));
console.log(archivoDeDatosEnJson)

// 3. Defino una cabecera.

const cabeceraArchivo = ["id_cliente", "id_tipo_documento",
      					"fecha_catastro", "nro_documento",
      					"nro_telefono", "tipo_persona",
      					"denominacion", "usuario_ultima_modificacion",
      					"fecha_ultima_modificacion", "pep",
      					"descripcion"];

// 4. Defino la constante que va convertir el archivo JSON
// archivoDeDatosEnJson a excel

const jsonAExcel = xlsx.utils.json_to_sheet([archivoDeDatosEnJson], {cabeceraArchivo});
// console.log(jsonAExcel)

// 5. Creo un nuevo libro
const libroNuevo = xlsx.utils.book_new();
// console.log(libroNuevo)

// 6. Convierte en archivoDeDatosEnJson en una hoja llamada "Clientes Catastrados".

xlsx.utils.book_append_sheet(libroNuevo, jsonAExcel, "ClientesCatastrados");

// 7. Escribir el archivo a base64.

const base64 = xlsx.writeFileSync(libroNuevo, 'test.xlsx',{bookType: "xlsx", type:"base64"})
// console.log(base64)

// return res.send(base64)


const today = dayjs().format("YYYY-MM-DD");
console.log(today)
