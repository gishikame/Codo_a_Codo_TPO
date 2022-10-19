//Este es el JS para los menúes que se encuentran dentro de la solapa
//Afiliados:
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
          //Agarro sólo un usuario al azar  dentro de la lista JSON
          let max= parseInt(Object.keys(data.users).length);
          let u= Math.floor(Math.random() * (max) );
          this.info=data.users[u]; 
          console.log(this.info)
          //Acá guardamos en la memoria local de los datos del usuario que levanté
          localStorage.clear();
          localStorage.setItem('Usuario', info['lastName']+" "+info['firstName'] );
          //Esto no me funciona, me muestra diferentes usuarios a la vez D:
        })
        .catch(error=> console.log(error));

  },
});

//Modificar los datos
function modify(){
    let cad= ``
      
        cad+=`<label for="Nombre">Nombre: </label>
        <input name="nombre" id="nombre" type="text" placeholder="Ingrese nombre" required/> 
        <label for="Apellido">Apellido: </label><input name="nombre" id="apellido" type="text" placeholder="Ingrese su apellido" required />
        <br>
        <label>Teléfono de contacto: </label><input name="tel" id="tel" type="tel" placeholder="Ingrese su teléfono" required />
        <label>E-mail: </label><input name="email" id="mail" type="email" placeholder="Ingrese su mail de contacto" size="24" required>
        <br>
        <label for="Localidad">Localidad: </label>
        <input name="localidad" type="text" id="localidad" placeholder="Ingrese su ciudad"/>
        <label for="CP">Código Postal: </label>
        <input name="CP" type="number" id="CP" min="0" placeholder="Ingrese el número postal"/>
        <label for="Provincia">Provincia: </label>
        <input name="provincia" type="text" id="provincia" placeholder="Ingrese su provincia"/>
        </div>
        `
    document.getElementById("datos").innerHTML=cad;    
}

//Guardar los cambios hechos
function save() {
    new_name= document.getElementById("nombre").value;
    new_surname= document.getElementById("apellido").value;
    new_tel= document.getElementById("tel").value;
    new_mail= document.getElementById("mail").value;
    new_city= document.getElementById("localidad").value;
    new_zip= document.getElementById("CP").value;
    new_state= document.getElementById("provincia").value;
    
    let cad= ``
    cad+=`<label for="Nombre">Nombre: </label>
    <p class="no_edit"> ${new_name}</p> 
    <label for="Apellido">Apellido: </label><p class="no_edit">${new_surname}</p><br>
    <label>Teléfono de contacto: </label><p class="no_edit"> ${new_tel}</p>
    <label>E-mail: </label><p class="no_edit">${new_mail}</p><br>
    <label for="Localidad">Localidad: </label ><p class="no_edit"> ${new_city}</p>
    <label for="CP">Código Postal: </label><p class="no_edit"> ${new_zip}</p>
    <label for="Provincia">Provincia: </label><p class="no_edit"> ${new_state}</p>
    </div>
      `    
    document.getElementById("datos").innerHTML=cad  
}

/*Quise usar el v-model pero no me anduvo, despues entendi que lo guarda en el DOM virtual...
  <div> <img :src="person.image" :alt="person.firstName"></div>
        <label for="nombre">Nombre: </label>
        <input name="nombre" id="nombre" type="text" v-model="name" required> 
        <label for="Apellido">Apellido: </label>
        <input name="nombre" id="apellido" type="text" v-model="surname" required>
        <br>
        <label>Teléfono de contacto: </label><input name="tel" id="tel" type="tel" v-model="phone" required>
        <label>E-mail: </label><input name="email" id="mail" type="email" v-model="email" size="24" required>
        <br>
        <label for="Localidad">Localidad: </label>
        <input name="localidad" type="text" id="localidad" v-model="city">
        <label for="CP">Código Postal: </label>
        <input name="CP" type="number" id="CP" v-model="zipcode">
        <label for="Provincia">Provincia: </label>
        <input name="provincia" type="text" id="provincia" v-model="state">
       </div>
*/