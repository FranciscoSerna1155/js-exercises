let sentence = "w3resourse";
let count = 0;
let max = 50;


function eliminacion(){
	sentence = sentence.slice(-1) + sentence.slice(0, -1);
        console.log(sentence);
	count++;

	if(count > max){
	clearInterval(intervalId);
	console.log("rotacion detenida");
	}
}

let intervalId = setInterval(eliminacion,1000);

