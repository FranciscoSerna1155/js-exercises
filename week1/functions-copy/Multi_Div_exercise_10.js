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
2nd Number : <input type="text" id="secondNumber"><br>
<input type="button" onClick="multiplyBy()" value= "multiply">
<input type="button" onClick="divideBy()" value= "divide">
</form>
<p>The result is: <br>
<span id="result"></span>
</p>
</body>
</html>
