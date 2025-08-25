function obtenerExtension(nombreArchivo) {
	return nombreArchivo.split('.').pop();
}


const nombreArchivo = "holamundo.js";
const extension = obtenerExtension(nombreArchivo);
console.log(extension); 
