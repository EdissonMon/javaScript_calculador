//Botones

function valor(x) {
    document.getElementById('display').value += x ;
}

//Borrar
function borrarDisplay(y) {
    document.getElementById('display').value = y;
}

//Resultado
function calResultado() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}