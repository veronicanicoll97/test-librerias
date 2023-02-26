const fs = require("fs");
const path = require("path");

// Se arma el directorio de esta manera, ya en Windows el separador
// de directorios es (\) y el otras distros de Linux es (/).

const directorio = path.join("archivos", "uploads", "catastro");

// Se obtiene una lista con todos los archivos que hay en el directorio.

const archivos = fs.readdirSync(directorio);

// ##########################################################################

const haceAlgo = (archivos, directorio) => {
	for (const archivo of archivos){
		const rutaAbsoluta = path.join(directorio, archivo)
		
		// Se obtiene extension del archivo.
		const extensionArchivo = path.extname(rutaAbsoluta)

		// Se obtiene nombre del archivo.

		const nombreDeArchivo = path.basename(rutaAbsoluta, extensionArchivo)
	}



}


haceAlgo(archivos, directorio)
//