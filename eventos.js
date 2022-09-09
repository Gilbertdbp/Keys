
// VARIABLES

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var ecolor = document.getElementById("eligeColor");
var boton = document.getElementById("botoncito");
var borrador = document.getElementById("borrarLienzo");
var x = 150;
var y = 150;
var teclas = {
    UP: 38,
    DOWN: 40, 
    RIGHT: 39,
    LEFT: 37

};

console.log(ecolor);

document.addEventListener("keydown", dibujarTeclado);
dibujarLinea(ecolor, x - 1, y - 1, x + 1, y + 1, papel);

// FUNCIONES
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var movimiento = 2;
    if(evento.keyCode === teclas.UP){
        dibujarLinea(ecolor, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    } if(evento.keyCode === teclas.DOWN){
        dibujarLinea(ecolor, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    } if(evento.keyCode === teclas.RIGHT){
        dibujarLinea(ecolor, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    } if(evento.keyCode === teclas.LEFT){
        dibujarLinea(ecolor, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    }
}


