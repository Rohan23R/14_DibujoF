var teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

document.addEventListener("keyup", dibujarTeclado);

document.addEventListener("click", dibujaRaton);

var cuadrito = document.getElementById("papelito");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;

var xinic;
var yinic;

var xfini;
var yfini;

var cambiador = 3;
function dibujaRaton (cor){
    if (cambiador == 1) {cambiador = 2} else if(cambiador == 2) {cambiador =1};

    if (cambiador == 1){
    xinic = cor.clientX;
    yinic = cor.clientY;
    console.log("inicio");
    console.log(xinic + ", " + yinic);
    dibujarLinea(papel,"orange", xinic, yinic, xinic +2, yinic+2);
    };

    if (cambiador == 2){
    xfini = cor.clientX;
    yfini = cor.clientY;
      console.log("fini");
      console.log(xfini + ", " + yfini);

    dibujarLinea(papel,"orange", xinic, yinic, xfini, yfini);
    
    xinic = xfini;
    yinic = yfini;
    cambiador = 1;
    };

    if(cambiador ==4){cambiador =2}
}

function Escapate(){
    dibujarLinea(papel,"black", xinic, yinic, xfini, yfini);
    cambiador =3;
}   

function Iniciate(){
    cambiador =4;
}   

dibujarLinea(papel, "red", 149, 149, 151, 151);

function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.lineWidth =3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

var colorete = "green";
var movimiento_sensual = 50;

window.onload =function(){
document.getElementById("bArr").onclick=dirArriba;
document.getElementById("bAba").onclick=dirAbajo;
document.getElementById("bIzq").onclick=dirIzquierda;
document.getElementById("bDer").onclick=dirDerecha;
document.getElementById("Escapate").onclick=Escapate;
document.getElementById("Iniciate").onclick=Iniciate;

}

function dirArriba(){
    dibujarLinea(papel, colorete,x,y,x,y-movimiento_sensual);
    y=y-movimiento_sensual;
    bArr.style.visibility="hidden";
}

function dirAbajo(){    
    dibujarLinea(papel, colorete,x,y,x,y+movimiento_sensual);
    y=y+movimiento_sensual;
}

function dirIzquierda(){
    dibujarLinea(papel, colorete,x,y,x-movimiento_sensual,y);
    x=x-movimiento_sensual;
}

function dirDerecha(){
    dibujarLinea(papel, colorete,x,y,x+movimiento_sensual,y);
    x=x+movimiento_sensual;
}

function dibujarTeclado(rocotito){
    var colorcito = "blue";
    var movimiento = 50;

    function y_arriba(){y=y-movimiento}
    function y_abajo(){y=y+movimiento}
    function x_izquierda(){x=x-movimiento}
    function x_derecha(){x=x+movimiento}
    
    switch(rocotito.keyCode){
        case teclas.UP:
            dibujarLinea(papel, colorcito,x,y,x,y-movimiento);
            y_arriba();
        break;
        case teclas.DOWN:
            dibujarLinea(papel, colorcito,x,y,x,y+movimiento);
            y_abajo();
        break;
        case teclas.LEFT:
            dibujarLinea(papel, colorcito,x,y,x-movimiento,y);
            x_izquierda();
        break;
        case teclas.RIGHT:
            dibujarLinea(papel, colorcito,x,y,x+movimiento,y);
            x_derecha();
        break;  
    }
}

