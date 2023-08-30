//Ejercicio 1 ↓

let conversion = prompt(" ej 1 | elija conversion a realizar: 1_celsius a farenheit o 2_farenheit a celsius");
if (conversion == 1 || conversion == "celsius a farenheit" ){
    let valor = prompt(" ej 1 | ingrese valor Celsius a convertir a Farenheit:");
    let res = ((valor * 1.8) + 32);
    document.write(`La conversion de <b> ${valor} Celsius</b>: <br>
                    es igual a: <b>${res} Ferenheit</b> `)
} else if (conversion == 2 || conversion == "farenheit a celsius") {
    let valor = prompt ("Ingrese valor de Farenheit a convertir en Celsius");
    let res = ((valor-32)/1.8);
    document.write(`La conversion de <b> ${valor} Celsius</b>: <br>
    es igual a: <b>${res} Ferenheit</b>`);
} else {
    document.write(`<b style="color: red;>Valor incorrecto </b>`);
}
