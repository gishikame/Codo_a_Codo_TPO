/* Este es el JS para la página de Servicios de Salud*/
//Llamo a Vue para mostrar la solapa de Afiliados si el login es verdadero
const app = new Vue ({
  el: '#app',
  data:{
    info:{}
  },
  created(){
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
          this.info=data.users[0]; //Agarro sólo un usuario
          console.log(this.info)
        })
        .catch(error=> console.log(error));

  },
});

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

