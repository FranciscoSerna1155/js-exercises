var L1 = 5;
var L2 = 6;
var L3 = 7;

function semiperimetro(){
	let s = (L1+L2+L3)/2;
	return s;
}

function area(){
	let s = semiperimetro();
	return Math.sqrt(s*(s-L1)*(s-L2)*(s-L3));
}

console.log("el area del triangulo es " +area());
