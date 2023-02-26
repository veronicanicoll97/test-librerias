const path = require("path");

const obtenerRutaAbsoluta = ({directorio, archivosdelDirectorio}) => {
    // rutaAbsoluta es un string que contiene la el directorio
    // y nombre de archivo.
    const rutaAbsoluta = directorio + "/" + archivosdelDirectorio;

    return console.log(rutaAbsoluta);
}

const nombreDeArchivo = (rutaAbsoluta) => {
    // Se retona nombre del archivo.
    return console.log(path.basename(rutaAbsoluta, path.extname(rutaAbsoluta)));

}

const extensionArchivo = (rutaAbsoluta) => {
    // Retorna la extension del archivo.
    return console.log(path.extname(rutaAbsoluta))
}


module.exports = async ({directorio="archivos/uploads/catastro", archivosdelDirectorio="2-800100200-3-1234567.txt"}) => {
    const rutaAbsoluta = await obtenerRutaAbsoluta({directorio, archivosdelDirectorio})
    console.log(rutaAbsoluta)

    console.log(await nombreDeArchivo(rutaAbsoluta));
    console.log(await extensionArchivo(rutaAbsoluta));

    return null;
}