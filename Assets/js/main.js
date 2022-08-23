console.log("Entro al main.js");

let numbarril = [];
let nombre_previo = "";
let editando = false;

const CrearBarril = document.getElementById ("CrearBarril");
const BorrarBarril = document.getElementById ("BorrarBarril");

function agregarBarril() {
    const barril = CrearBarril.value;
    numbarril.push(barril);
    localStorage.setItem("numbarril", JSON.stringify(numbarril));

    // console.log(numbarril)
}

function actualizarLista(){
    
}

function borrarBarril() {
   localStorage.clear();
   numbarril = []
   console.log(numbarril);
}