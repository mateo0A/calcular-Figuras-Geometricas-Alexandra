
function area(){
    var lado=document.getElementById("lado").value;
    var area=lado*lado;
    var res= document.getElementById("resp").value=area;

}

function borra(){
    document.getElementById("lado").value="";
    document.getElementById("resp").value="";
}


function calcularPerimetro() {
    var lado = document.getElementById('ladoPerimetro').value;
    var perimetro = 4 * lado;
    document.getElementById('respPerimetro').value = perimetro;
}

function borrarPerimetro() {
    document.getElementById('ladoPerimetro').value = '';
    document.getElementById('respPerimetro').value = '';
}