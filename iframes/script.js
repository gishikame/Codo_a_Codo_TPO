//Levantar el JSON
/*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

      console.log(data.id[0])
      datos=data.id[0] //.id Propiendad que quiero levantar del JSON
*/
const myJSON = '{"name":"John", "surname":"Jones", "age":31, "city":"New York", "zipcode": 8988, "address":"78 Lincoln st", "phone":5666222, "email":"jonhy@mail.com"}';
const data = JSON.parse(myJSON);
let cad= ``
//for (info of data){
cad+=`<label for="Nombre">Nombre: </label>
<p class="no_edit"> ${data.name}</p> 
<label for="Apellido">Apellido: </label><p class="no_edit">${data.surname}</p><br>
<label>Teléfono de contacto: </label><p class="no_edit"> ${data.phone}</p>
<label>E-mail: </label><p class="no_edit">${data.email}</p><br>
<label for="Localidad">Localidad: </label ><p class="no_edit"> ${data.city}</p>
<label for="CP">Código Postal: </label><p class="no_edit"> ${data.zipcode}</p>
<label for="Provincia">Provincia: </label><p class="no_edit"> ${data.city}</p>
</div>
`
//}
document.getElementById("datos").innerHTML=cad;

//Modificar los datos
function modify(){
    let cad= ``
      //for (info of datos){
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
    


/*function signIn(userName, password) {
    console.log(userName,password)
  }
  
  const currentUsername = document.getElementById("username");
  const currentPassword = document.getElementById("password");
  const submitButton = document.getElementById("submitButton");
  
  submitButton.addEventListener("click", () => {
    signIn(currentUsername.value, currentPassword.value);
  });
*/

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

//Cancelar los cambios
function cancel() {
    const myJSON = '{"name":"John", "surname":"Jones", "age":31, "city":"New York", "zipcode": 8988, "address":"78 Lincoln st", "phone":5666222, "email":"jonhy@mail.com"}';
    const datos = JSON.parse(myJSON);
    let cad= ``
      cad+=`<label for="Nombre">Nombre: </label>
      <p class="no_edit"> ${datos.name}</p> 
      <label for="Apellido">Apellido: </label><p class="no_edit">${datos.surname}</p><br>
      <label>Teléfono de contacto: </label><p class="no_edit"> ${datos.phone}</p>
      <label>E-mail: </label><p class="no_edit">${datos.email}</p><br>
      <label for="Localidad">Localidad: </label ><p class="no_edit"> ${datos.city}</p>
      <label for="CP">Código Postal: </label><p class="no_edit"> ${datos.zipcode}</p>
      <label for="Provincia">Provincia: </label><p class="no_edit"> ${datos.city}</p>
      </div>
      `
   document.getElementById("datos").innerHTML=cad
        
  }

  

