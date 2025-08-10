
console.log("ingresa numero para validar si es biciesto");

let year = parseInt(process.argv[2]);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){ 
	console.log ("year is leap");
}else{
     console.log("year is not leap");
}
