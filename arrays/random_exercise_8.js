
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output:process.stdout
});

function getRandomInt(min,max) {
       return Math.floor(Math.random() * (max - min +1)) + min;	
}

let random1 = getRandomInt(1,10);

rl.question("Ingrese numero para saber si coincide con el aleatorio ",function(dato){
dato = parseInt(dato);
rl.close();


	if (dato === random1){
	console.log ("Numero coincide")
	}else{
	console.log ("Numero no coincide");
	}
});

