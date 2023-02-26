const fs = require("fs");
const path = require("path");

const directorio = "archivos/uploads/catastro"

// Obtener nombre_de_archivo.extension desde el directorio

const fileNames = fs.readdirSync(directorio);
console.log(fileNames)
// Obtener un elemento del array

const fileName = fileNames.toString();
console.log(fileName)

//Ruta absoluta

const rutaAbsoluta = directorio + "/" + fileName

// Obtener extension

const extension = path.extname(rutaAbsoluta)


// Obtener nombre_de_archivo sin la extension.
const nombre = path.basename(rutaAbsoluta, path.extname(rutaAbsoluta))
// 	console.log(nombre)

// Leer archivos desde el directorio y converitirlos a un JSON.

const readingFiles = fs.readFileSync("archivos/uploads/catastro/2-800124555-5-1555547.docx", {encoding: "base64"})
console.log(readingFiles)

// Escrubir el archivo leído a base64.

//const toBase64 = (rutaAbsoluta) => {

//	const reader = new FileReader(rutaAbsoluta);
//	reader.readAsDataURL(rutaAbsoluta);
//	return console.log(reader.result)
//}

//toBase64(rutaAbsoluta)