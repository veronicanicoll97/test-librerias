const {readFileSync} = require("fs")
const xlsx = require("xlsx");

//Pasos a tener en cuenta.

// 1. Defino la constante que va recibir mi archivo JSON en bruto.

const archivoDeDatosEnJson = JSON.parse(readFileSync("./response.json", "utf8"));

// 2. Defino la constante que va tener el nombre del archivo excel

const nombreDeArchivoExcel = `ArchivoDePrueba.xls`

// 3. Defino una cabecera.

const cabeceraArchivo = Object.keys(archivoDeDatosEnJson);

// 4. Defino la constante que va convertir el archivo JSON
// archivoDeDatosEnJson a excel

const jsonAExcel = xlsx.utils.json_to_sheet(nombreDeArchivoExcel.nombreDeArchivoExcel, {cabeceraArchivo});

// 5. 
