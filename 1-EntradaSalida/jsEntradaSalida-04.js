/* Ramirez Luciano - Divison D - Grupo 3
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// resevo espacio en memoria para guardar el nombre del User
	var nombre;

	// guardo en la variable nombre el texto que escribio el usario dentro de la ventana promp 
	nombre = prompt("Ingrese su nombre");

	// copio el nombre que guardado la variable nombre de la caja de texto embebida en la pagina HTML
	document.getElementById("txtIdNombre").value = nombre
}

