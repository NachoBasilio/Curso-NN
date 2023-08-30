// Ejercicio 2 ↓

let nota1 = prompt(`ej2 | Ingrese nota del 1er cuatrimestre: `);
let nota2 = prompt(`ej2 | Ingrese nota del 2do cuatrimestre: `);
let nota3 = prompt(`ej2 | Ingrese nota del 3er cuatrimestre: `);

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);

let res = parseFloat((nota1 + nota2 + nota3) / 3);

if (res >=6){
    document.write(`Su promedio es: ${res}. Usted a <b>Aprobado</b>`);
    }else if (res<6) {
    document.write(`Su promedio es: ${res}. Usted a <b>Desaprobado</b>`)
    }else if (res>10){
    document.write("Ha ingresado valores erroneos");
    }
    else{
        document.write("Ha ingresado valores erroneos");
    }


