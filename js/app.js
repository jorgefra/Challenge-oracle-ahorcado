
var palabras = ['ALURA ','HTML','FAMILIA','ANCIANO','BALANZA','CARTUCHO','FLAUTA','JAVA','AMIGOS','SALSA']

var boton_inicio = document.getElementsByClassName('boton-inicio')
var boton_palabra = document.getElementsByClassName('boton-palabra')
var boton_guardar = document.getElementsByClassName('boton-guardar')
var boton_cancelar = document.getElementsByClassName('boton-cancelar')
var boton_juego = document.getElementsByClassName('boton-juego')
var boton_desistir = document.getElementsByClassName('boton-desistir')


document.onkeydown = letrasKeydown;

function letrasKeydown(){
    console.log('letra presionada')
    var letra = capturarLetra(event);
    console.log(letra);
}