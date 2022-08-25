console.log("Entro al main.js");

let numbarriles = [];
let barril_previo = "";
let editando = false;

const CrearBarril = document.getElementById("CrearBarril");
const lista = document.getElementById("lista");
const BorrarBarril = document.getElementById("BorrarBarril");

function agregarBarril() {
    const barril = CrearBarril.value;
    numbarriles.push(barril);
    localStorage.setItem("numbarriles", JSON.stringify(numbarriles));
    CrearBarril.value = "";
    actualizarlista();
}

function actualizarlista() {
    lista.innerHTML ="";
    console.log("entro a actualizar barriles");
    numbarriles.forEach(barril => {
        const li = document.createElement("li");
        li.textContent = barril;
        li.classList.add("list-group-item");
        lista.appendChild(li);
    });
}
function limpiarStorage() {
    localStorage.clear();
    numbarriles = [];
}
// function borrarBarril() {
//    localStorage.clear();
//    numbarril = []
//    console.log(numbarril);
// }