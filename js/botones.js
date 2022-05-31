var boton_inicio = document.querySelector('.boton-inicio')
var boton_palabra = document.querySelector('.boton-palabra')
var boton_guardar = document.querySelector('.boton-guardar')
var boton_cancelar = document.querySelector('.boton-cancelar')
var boton_juego = document.querySelector('.boton-juego')
var boton_desistir = document.querySelector('.boton-desistir')

boton_inicio.onclick = botonInicio
boton_palabra.onclick = botonPalabra
boton_cancelar.onclick = botonCancelar
boton_desistir.onclick = botonDesistir
boton_guardar.onclick = botonGuardar
boton_juego.onclick = botonJuego


function botonInicio(){
    console.log('click')
    cambiarPantalla('.pantalla-juego');
    console.log(randomPalabra(0,(palabras.length-1)))
}
function botonPalabra(){
    console.log('click')
    cambiarPantalla('.pantalla-palabra');
}
function botonCancelar(){
    console.log('click')
    cambiarPantalla('.pantalla-inicio');
}
function botonDesistir(){
    console.log('click')
    cambiarPantalla('.pantalla-inicio');
}
function botonGuardar(){
    console.log('click')

    if (agregarPalabra()){
        cambiarPantalla('.pantalla-juego');
        console.log(palabras[palabras.length-1])
        console.log(palabras)
    }
}
function botonJuego(){
    console.log('click')
    cambiarPantalla('.pantalla-juego');
    console.log(randomPalabra(0,(palabras.length-1)))
}