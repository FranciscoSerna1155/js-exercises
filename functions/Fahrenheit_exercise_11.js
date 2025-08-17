<!DOCTYPE html>


<html>
<head>
<meta charset=utf-8 />
<title> Javascript program to convert Fahrenheith to celsius </title>
<style>
body { margin: 30px;}
</style>
<script>


function converttoCelsius(){

	let num1 = parseFloat(document.getElementById("Temperatura").value);
	result = (num1-32) * 5/9;

	document.getElementById("result").innerHTML = resultado.toFixed(2) + "C";

}

function converttoFahrenheit(){

        let num1 = parseFloat(document.getElementById("Temperatura").value);
	result = (num1 * 9/5)+32;
        document.getElementById("result").innerHTML = resultado.toFixed(2) + "F";


}

</script>
</head>
<body>
<form>
GradosCelcius: <input type="text" id="celsius"><br>
GradosFahrenheit: <input type="text" id="Fahrenheit"><br>

<input type="button" onClick="convertedtoFahrenheit()" value="Convertir a Fahrenheit">
<input type="button" onCLick="convertedtoCelsius()" value="Convertir a Celsius">

</form>
<p>la temperatura es: <br>
<span id="result"></span>
</p>
</body>
</html>
