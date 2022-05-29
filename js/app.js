
var palabras = ['ALURA ','HTML','FAMILIA','ANCIANO','BALANZA','CARTUCHO','FLAUTA','JAVA','AMIGOS','SALSA']








console.log(randomPalabra(0,(palabras.length-1)))

function randomPalabra(min, max) {
    return palabras[Math.floor((Math.random() * (max - min + 1)) + min)];
}

