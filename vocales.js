function contarVocales(text){
    var vocales ="aeiouAEIOUáéíóú";
    var cantidadVocales=0;
    for (var caracter of text) {
        if (vocales.includes(caracter)){
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

var text=prompt("Introduce un texto: ");
var resul =contarVocales(text);
alert("El número de vocales en la cadena es: " + resul);