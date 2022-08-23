console.log("Entro al main.js");

let numbarril = [];

const CrearBarril = document.getElementById ("CrearBarril");
const BorrarBarril = document.getElementById ("BorrarBarril");

function agregarBarril() {
    const barril = CrearBarril.value;
    numbarril.push(barril);
    console.log(numbarril)
}

function borrarBarril() {
    console.log("Entro a borrarBarril");
}