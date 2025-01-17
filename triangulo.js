function calcularArea() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var area = 0.5 * base * altura;
    document.getElementById('respArea').value = area.toFixed(2);
}

function borrarArea() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('respArea').value = '';
}

function calcularPerimetro() {
    var ladoA = document.getElementById('ladoA').value;
    var ladoB = document.getElementById('ladoB').value;
    var ladoC = document.getElementById('ladoC').value;
    var perimetro = parseFloat(ladoA) + parseFloat(ladoB) + parseFloat(ladoC);
    document.getElementById('respPerimetro').value = perimetro.toFixed(2);
}

function borrarPerimetro() {
    document.getElementById('ladoA').value = '';
    document.getElementById('ladoB').value = '';
    document.getElementById('ladoC').value = '';
    document.getElementById('respPerimetro').value = '';
}