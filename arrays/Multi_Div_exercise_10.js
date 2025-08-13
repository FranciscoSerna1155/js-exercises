/* vamos a hacer 5 fuciones, primero una que lea una text box donde venga
el numero a dividir y multiplicar,luego otra para seleccionar el segundo
numero por el cual se realizara la operacion y 
 despues otra para  dos para al pulsar
un boton este procesa a  hacer la respectiva multiplicacion o division,
y depues otra para mostrar el texto en una etiqueta 
*/

function get_Number(){
//obtiene los valores de la entrada  el primero y segundo numero 
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getELementById("secondNumber").value;
//activa el poder ver el producto de los dos elemtos
	document.getELementbyId("result").innerHTML = num1 * num2;

}


function divideBy() {

	num1 = document.getELementById("firstNumber").value;
	num2 = document.getELementById("secondNumber").value;

	document.getELementbyIdy("result").innerHTML = num1 / num2;
}
