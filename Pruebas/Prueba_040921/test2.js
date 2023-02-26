const {readFileSync} = require("fs")
const xlsx = require("xlsx")


const createXLSX = ({workbook}) => {
	return new Promise((resolve, reject) => {
		xlsx.writeFileAsync(`demo_xlsx.xls`, workbook, (err, result) => {
			if(err) {
				return reject(err)
			}

			return resolve(result)
		})
	})
}


const header = [
	"id_cliente", "id_tipo_documento", "fecha_catastro", "nro_documento",
	"nro_telefono", "tipo_persona", "denominacion",
	"usuario_ultima_modificacion", "fecha_ultima_modificacion", "pep",
	"descripcion"
]


const data = JSON.parse(readFileSync("./response.json", "utf8"))
console.log(data)

const sheet = xlsx.utils.json_to_sheet(data.data, {header})
const workbook = xlsx.utils.book_new()
xlsx.utils.book_append_sheet(workbook, sheet, "DEMO")
//const filename = `demo_xlsx.xls`

const recorrido = ([data]) 
recorrido.forEach(dato => {return console.log(dato[dato])})


//console.log(recorrido([data]))

//createXLSX({workbook})
//.then(result => console.log(result))
//.catch(err => console.log(err))

