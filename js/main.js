const llamandoFetch = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data))
        .catch(error => {
            const lblError = document.getElementById('lnlError'); // Fix: Changed 'lblError' to 'lnlError'
            lblError.innerHTML = "Ocurrió un error: " + error; // Fix: Changed "surgio un Error" to "Ocurrió un error"
        });
};

const mostrarDatos = (data) => {
    const res = document.getElementById('respuesta');
    res.innerHTML = ""; // Clear previous content

    for (let item of data) {
        res.innerHTML += item.userId + " " + item.id + " " + item.title + " " + item.completed + "<br>"; // Fix: Changed 'userID' to 'userId', 'complleted' to 'completed'
    }
};

const limpiarDatos = async () => {
    res = document.getElementById('respuesta');
    res.innerHTML = "";

}


//Usando Await
const llamandoAwait = async () =>{
    try{
        const url = "https://jsonplaceholder.typicode.com/todos";
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        mostrarDatos(data);
    }
    catch(error){
        console.log("surgio un error" + error);
    }
}


// Usando Axion
const llamandoAxion = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    axios
    .get(url)
    .then((res) =>{
        mostrarDatos(res.data)
    })
    .catch((err) => {
        console.log("Surgió un error "+ err);
    })
}

//Botones
document.getElementById('btnCargarP').addEventListener('click', () => { // Fix: Removed 'funcion()'
    llamandoFetch();
});

document.getElementById('btnCargarA').addEventListener('click', () => { // Fix: Removed 'funcion()'
    llamandoAwait();
});

document.getElementById('btnCargarAx').addEventListener('click', () => { // Fix: Removed 'funcion()'
    llamandoAxion();
});

document.getElementById('btnLimpiar').addEventListener('click', () => { // Fix: Removed 'funcion()'
    limpiarDatos();

});