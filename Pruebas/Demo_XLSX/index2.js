const {readFileSync} = require("fs")
const xlsx = require("xlsx")


const createXLSX = ({workbook, filename}) => {
	return new Promise((resolve, reject) => {
		xlsx.writeFileAsync(filename, workbook, (err, result) => {
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
	"denominacion"
]


const data = JSON.parse(readFileSync("./response.json", "utf8"))

const sheet = xlsx.utils.json_to_sheet(data.data, {header})
const workbook = xlsx.utils.book_new()
xlsx.utils.book_append_sheet(workbook, sheet, "DEMO")
const filename = `demoxlsx.xls`

createXLSX({workbook, filename})
.then(result => result)
.catch(err => err)


const binaryData = xlsx.readFileSync(filename).toString();

const base64String = new Buffer.from(binaryData, 'base64', 'utf8').toString();

console.log(xlsx);
console.log(base64String);
