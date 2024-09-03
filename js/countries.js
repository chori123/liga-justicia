const llamandoCountries = (nom) => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarDatos(data, nom.toLowerCase()))
        .catch(error => {
            console.log("Ocurrió un error" + error)
            const lblError = document.getElementById('errorLbl');
            lblError.innerHTML = "Ocurrió un error " + error;
        });
};

const parseLan = (lan) => {
    const lan2 = Object.values(lan)[0];
    return lan2;
}

const mostrarDatos = (data, nom) => {
    const cpt = document.getElementById('txtCap');
    const lan = document.getElementById('txtLan');
    for (var i of data) {
        if (i.name.common.toLowerCase() === nom) {
            lan.value = parseLan(i.languages);
            cpt.value = i.capital[0];
            return;
        }
    }
    alert("No hay coincidencias");
}

const limpiarDatos = async () => {
    const cpt = document.getElementById('txtCap');
    const lan = document.getElementById('txtLan');
    const nom = document.getElementById('buscarTxt');

    cpt.value = "";
    lan.value = "";
    nom.value = "";
}

document.getElementById('btnLimpiar').addEventListener('click', () => {
    limpiarDatos();
});

document.getElementById('btnBuscar').addEventListener('click', () => {
    const nom = document.getElementById('buscarTxt').value.toLowerCase();
    llamandoCountries(nom);
});
