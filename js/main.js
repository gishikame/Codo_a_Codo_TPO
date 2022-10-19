/* Este es el JS para la página de Servicios de Salud*/
//FUNCIONES
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

//Se avisa por mensaje los botones que no funcionan:
function unable(){
  return(alert("Este botón no funciona aún en esta versión"))
}

//API REST
//Esto solo para la solapa de afiliados (menu navegador arriba)
//Llamo a Vue para mostrar los datos del Afiliado
const app = new Vue ({
  el: '#app',
  data:{
    info:[],
  },
  created(){
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
          //Agarro sólo el usuario que esta dado de alta en el sistema (id=0)
          this.info=data.users[0]; //Si agarro otro usuario no se muestra esta informacion personal
          console.log(this.info)
          //Acá guardamos en la memoria local de los datos del usuario que levanté
          localStorage.clear();
          localStorage.setItem('Usuario', info['lastName']+" "+info['firstName'] );
          //Esto no me funciona, me muestra diferentes usuarios a la vez D:
        })
        .catch(error=> console.log(error));

  },
});