function calcularArea() {
    var radio = document.getElementById('radio').value;
    var area = Math.PI * (radio ** 2);
    document.getElementById('respArea').value = area.toFixed(2);
}

function borrarArea() {
    document.getElementById('radio').value = '';
    document.getElementById('respArea').value = '';
}


function calcularPerimetro() {
    var radio = document.getElementById('radioPerimetro').value;
    var perimetro = 2 * Math.PI * radio;
    document.getElementById('respPerimetro').value = perimetro.toFixed(2);
}

function borrarPerimetro() {
    document.getElementById('radioPerimetro').value = '';
    document.getElementById('respPerimetro').value = '';
}