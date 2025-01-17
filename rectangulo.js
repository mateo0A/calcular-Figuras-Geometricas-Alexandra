function calcularArea() {
    var longitud = document.getElementById('longitud').value;
    var ancho = document.getElementById('ancho').value;
    var area = longitud * ancho;
    document.getElementById('respArea').value = area.toFixed(2);
}

function borrarArea() {
    document.getElementById('longitud').value = '';
    document.getElementById('ancho').value = '';
    document.getElementById('respArea').value = '';
}

function calcularPerimetro() {
    var longitud = document.getElementById('longitudPerimetro').value;
    var ancho = document.getElementById('anchoPerimetro').value;
    var perimetro = 2 * (parseFloat(longitud) + parseFloat(ancho));
    document.getElementById('respPerimetro').value = perimetro.toFixed(2);
}

function borrarPerimetro() {
    document.getElementById('longitudPerimetro').value = '';
    document.getElementById('anchoPerimetro').value = '';
    document.getElementById('respPerimetro').value = '';
}