/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma= precio1 + precio2 + precio3 ;

    alert("la suma es " + suma)
}
function Promedio () 
{
    let precio4;
    let precio5;
    let precio6;
    let suma;

    precio4=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio5=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio6=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma= ((precio4 + precio5 + precio6) / 3 ) ;

    alert("el promedio es " + suma)
}
function PrecioFinal () 
{
    let precio7;
    let precio8;
    let precio9;
    let suma;
    let iva
    let PrecioFinal

    precio7=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio8=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio9=parseFloat(document.getElementById("txtIdPrecioTres").value);

    //suma= ((precio7  + precio8  +precio9 ) + 0.21); //asi lo hice yo no funciona

    suma= precio7 + precio8 + precio9 ;
    iva=suma * 21 /100; //( 0.21 es lo mismo )
    PrecioFinal= suma + iva; 
    PrecioFinal= PrecioFinal.toFixed(2)

    alert("el producto final es " + PrecioFinal)
}