var tablero = document.getElementById('canvas').getContext('2d');

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath();

    var ancho = 250/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(20+(ancho*i),80)
        tablero.lineTo(40+(ancho*i),80)
    }
    tablero.stroke();
    tablero.closePath();
}

function dibujarLetra(index){
    tablero.font = "bold 40px Arial"
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "black"

    var ancho = 250/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],18+(ancho*index),60)
}

function dibujarLetraIncorrecta(letra, intentos){
    tablero.font = "bold 30px Arial"
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "gray"

    tablero.fillText(letra,10+(10*(10-intentos)),200,40)
}


function cambiarPantalla(pantallaClase){
    var pantalla_juego = document.querySelector('.pantalla-juego')
    var pantalla_inicio = document.querySelector('.pantalla-inicio')
    var pantalla_palabra = document.querySelector('.pantalla-palabra')
    var pantalla = document.querySelector(pantallaClase)
    pantalla_inicio.style.display = "none";
    pantalla_juego.style.display = "none";
    pantalla_palabra.style.display = "none";
    pantalla.style.display = "flex";
}

function agregarPalabra(){
    var palabra = document.querySelector('#entrada')
    if(palabra.value.length > 2){
        palabras.push(palabra.value.toUpperCase())
    }else{
        alert("Minimo 3 letras")
        return false;
    }
    return true;
}

function randomPalabra() {
    let max = palabras.length-1;
    console.log(palabras)
    return palabras[Math.floor((Math.random() * (max + 1)))];
}

function capturarLetra(event) {
    var codigo = event.which || event.keyCode;
    console.log(codigo)
    if((codigo >= 65 && codigo <= 90) || codigo == 192){
      return String.fromCharCode(codigo);
    }
}

