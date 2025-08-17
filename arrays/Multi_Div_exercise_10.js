/* vamos a hacer 5 fuciones, primero una que lea una text box donde venga
el numero a dividir y multiplicar,luego otra para seleccionar el segundo
numero por el cual se realizara la operacion y 
 despues otra para  dos para al pulsar
un boton este procesa a  hacer la respectiva multiplicacion o division,
y depues otra para mostrar el texto en una etiqueta 
*/


22/07/2025
27/07/2025
04/08/2025
05/08/2025
Today
<!DOCTYPE html>

<html>
<head>
<meta charset=utf-8 />
<title> JavaScript program to calculate multipication and division of
 two number </title>
<style>
body { margin: 30px;}
</style>
<script>

function multiplyBy(){
	let num1 = parseFloat(document.getElementById("firstNumber").value);
	let num2 = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy(){
	let num1 = parseFloat(document.getElementById("firstNumber").value);
	let num2 = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("result").innerHTML = num1/num2;
}

</script>
</head>
<body>
<form>
1st Number : <input type="text" id="firstNumber"><br>
2nd Number : <input type="text" id="se… Read more
8:50 pm



