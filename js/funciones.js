

function cambiarPantalla(pantallaClase){
    console.log('funcion')
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

function randomPalabra(min, max) {
    return palabras[Math.floor((Math.random() * (max - min + 1)) + min)];
}


function capturarLetra(event) {
    var codigo = event.which || event.keyCode;
    console.log(codigo)
    if((codigo >= 65 && codigo <= 90) || codigo == 192){
      return String.fromCharCode(codigo);
    }
}