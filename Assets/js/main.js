console.log("Entro al main.js");

let numbarriles = [];
let barril_previo = "";
let editando = false;

const CrearBarril = document.getElementById ("CrearBarril");
const BorrarBarril = document.getElementById ("BorrarBarril");

function agregarBarril() {
    const barril = CrearBarril.value;
    numbarriles.push(barril);
    localStorage.setItem("numbarriles", JSON.stringify(numbarriles));
    console.log(numbarriles);

    // console.log(numbarril)
}

function actualizarbarriles (){
    
} 

function limpiarStorage(){
    localStorage.clear();
    numbarriles =[]; 
}

// function borrarBarril() {
//    localStorage.clear();
//    numbarril = []
//    console.log(numbarril);
// }