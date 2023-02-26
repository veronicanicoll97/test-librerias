const fs = require("fs");
const path = require("path");

const directorio = "archivos/uploads/catastro" + "/"+ "2-800100200-3-1234567.txt";


//console.log(path.extname(directorio));
//console.log(path.basename(directorio, path.extname(directorio)))

const toBase64 = directorio => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(directorio);
    console.log(reader.result);
})

        // reader.onload = () => resolve(reader.result);

/*
fs.readdir(directorio, (error, files) => {
	if(error){
		throw error;
	}else{

		//return files[0]
		// console.log(directorio +'/' +file+)
		//const fileNameAndExtension = (files) => {
		//	return file
		//}
		//  const array1 = file.split(".")
		//	array1.forEach());
		files.forEach(file =>
			console.log(file.slice((file.lastIndexOf(".") -1 >>>0) + 2)))

		//const x = directorio + `${file}`
		//files.forEach(file => file)
//	}
//})*/

/*const extensionesDeArchivo = 
 [".doc", ".docx", ".pdf", ".jpg", ".jpeg", ".png"]

const extension = 'txt';

console.log(extensionesDeArchivo.includes(extension));*/