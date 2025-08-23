let today = new Date();

let christmas = new Date(2025,11,25);
// se seteo la fecha de navidad de este year

let faltantetiempoglobal = christmas-today;
//resulta que el tiempo se puede restar jajaja 

let faltanteDias = Math.ceil(faltantetiempoglobal / (1000 * 60 * 60 * 24));
// Math.ceil sirve para redondear al mas grande


if(faltanteDias === 0){
	console.log ("es navidad");}else{
	console.log('faltan dias para navidad '+ faltanteDias);
}




