console.log("Entro al main.js");

let barriles = localStorage.getItem("barriles") ? JSON.parse(localStorage.getItem("barriles")) : [];
let barriles_previo = "";
let editando = false;

const CrearBarril = document.getElementById("CrearBarril");
const lista = document.getElementById("lista");
// const BorrarBarril = document.getElementById("BorrarBarril");

function agregarBarril() {
    if (editando) {
        console.log(barriles_previo);
        barriles = barriles.map(barrilesIndividual => barrilesIndividual === barriles_previo ? CrearBarrilInput.value : barrilesIndividual);
        localStorage.setItem("barriles", JSON.stringify(barriles));
        CrearBarril.value = "";
        actualizarlista();
        editando = false;
    } else {
        const barril = CrearBarril.value;
        barriles.push(barril);
        localStorage.setItem("barriles", JSON.stringify(barriles));
        CrearBarril.value = "";
        actualizarlista();
    }
}


function actualizarlista() {
    lista.innerHTML = "";
    // console.log("entro a actualizar barriles");
    barriles.forEach(barril => {
        const li = document.createElement("li");
        li.textContent = barril;
        li.classList.add("list-group-item");
        lista.appendChild(li);
    });
}

function deleteIndividual (barriles) {
    console.log(barriles);
    barriles = barriles.filter(n => n !== barril);
    localStorage.setItem("barriles", JSON.stringify(barriles));
    actualizarlista();
}

function limpiarStorage() {
    localStorage.clear();
    barriles = [];
    actualizarlista();
}

function editar(barriles){
    editando = true;
    barril_previo = barriles;
    CrearBarrilInput.value = barriles;
}

(() => {
    actualizarlista();
})()
// function borrarBarril() {
//    localStorage.clear();
//    numbarril = []
//    console.log(numbarril);
// }