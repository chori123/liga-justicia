const llamandoAxios = async (id) => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
    .get(url)
    .then((res) =>{
        //console.log(res)
        mostrarDatos(res.data, id)
    })
    .catch((err) => {
        console.log("Surgió un error "+ err);
    })
}

const limpiarDatos = async () => {
    const nombre = document.getElementById('txtNombre');
    const username = document.getElementById('txtUsername');
    const email = document.getElementById('txtEmail');
    const calle = document.getElementById('txtCalle');
    const numero = document.getElementById('txtNumero');
    const ciudad = document.getElementById('txtCiudad');
    const id = document.getElementById("txtId");
    
    id.value = ""
    nombre.value = ""
    username.value = ""
    email.value = ""
    calle.value = ""
    numero.value = ""
    ciudad.value = ""

}
const mostrarDatos = (data, id) => {
    const nombre = document.getElementById('txtNombre');
    const username = document.getElementById('txtUsername');
    const email = document.getElementById('txtEmail');
    const calle = document.getElementById('txtCalle');
    const numero = document.getElementById('txtNumero');
    const ciudad = document.getElementById('txtCiudad');
    
    for(var i of data){

        if(parseInt(i.id) === parseInt(id)){
            console.log("i")
            nombre.value = i.name
            username.value = i.username
            email.value = i.email
            calle.value = i.address.street
            numero.value = i.address.suite
            ciudad.value = i.address.city
            return;
        }
    }
    alert("No hay coincidencias");

};

document.getElementById('btnBuscar').addEventListener('click', () => {
    const id = document.getElementById('txtId').value
    llamandoAxios(id);
});

document.getElementById('btnLimpiar').addEventListener('click', () => {
    limpiarDatos();
})






