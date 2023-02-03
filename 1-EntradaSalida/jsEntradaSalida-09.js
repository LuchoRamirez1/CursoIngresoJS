/* Ramirez Luciano - Divison D - Grupo 3
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var nuevoSueldo;
	var aumento;
	//para calcular el nuevo sueldo deberia sumarle el aumento del 10%

	sueldo= parseFloat (document.getElementById("txtIdSueldo").value)
	//Consigo la ID donde se encuentra la informacion brindada por el usuario
	//Con esa informacion + el parseFloat transformo la informacion a numero flotante 
	//(parsefloat-flotante, parseInt-entero) (number-numero)

	aumento=sueldo * .1;
	//Aca se calcula el valor ingresado del sueldo multiplicado por 0.1 (10%)  

	nuevoSueldo= sueldo + aumento 

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}
