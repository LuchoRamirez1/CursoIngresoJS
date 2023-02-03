/* Luciano Ramirez Divison D Grupo 3
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellidoIngresado;
	var Edad;
	var mensaje

	nombre= document.getElementById("txtIdNombre").value;
	Edad= document.getElementById("txtIdEdad").value;
	//apellidoIngresado= document.getElementById("txtIdMensaje").value;
	apellidoIngresado= prompt ("Ingrese el apellido");

	mensaje = "usted se llama "+ nombre + " su apellido es " + apellidoIngresado + " y tiene " + Edad + " años de edad"

	txtIdMensaje.value = mensaje;

	//alert (`usted se llama  ${nombre} y tiene ${Edad} años`);

}


	/*
	 var nombre
	 var Edad

	 nombre = document.getElementById("txtIdNombre").value
	 Edad = document.getElementById("txtIdEdad").value

	 alert (`usted se llama  ${nombre} y tiene ${Edad} años`)



	 */






	

