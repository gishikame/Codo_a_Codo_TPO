/* Este es el JS para la página de Servicios de Salud*/
//Para abrir y cerrar el formulario del login, están las funciones openForm y closeForm
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//Para el iframe que muestra una opción del submenú, se quiere mostrar sólo el panel que se le hace click
function toggle_visibility(id) {
let e = document.getElementById(id);
if (e.style.display == 'block') {
e.style.display = 'none'
} else {
document.querySelectorAll('.item').forEach(function(div) {
 div.style.display = 'none';
})
e.style.display = 'block';
}
}
/*
// Selecciono los iframes (clase item) y ajusto alto y ancho
let frame = document.getElementsByClassName('item');
frame.onload = function() // funcion que se ejecuta en la carga del iframe
{ // setear la altura 
  console.log(frame.contentWindow.document.body.scrollHeight)
  frame.style.height=frame.contentWindow.document.body.scrollHeight + 'px';
  }
*/
