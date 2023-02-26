const archivoArray = (archivos) => {
	const aCadena = archivos.toString()
	return aCadena
}

// Encontrar la coincidencia en la cadena.
const valor = "2-800124555-5"
const encontrarCoincidencia = (aCadena, valor) => {
	const regEx = /(2 \d +(\-\d)*)/
	const coincidencias = aCadena.match(regEx)
	if (valor === coincidencias){
		return true
	}
	else{
		return false
	}
}
console.log(encontrarCoincidencia(archivoArray(archivos), valor))