//variables y tipos

var nombre = null
let apellido = "Perez"
const PI = 3.1416
const arreglo = []



console.log(nombre)

nombre = "Nacho"

console.log(nombre)

nombre = 354 

console.log(nombre)

//parse

let numero = 0
let numero2 = "23"

let numeroCorregido = parseInt(numero2)

console.log( numeroCorregido + numero)


let comparacion = numero === numero2

console.log(comparacion)


//condicionales

if(numero > 0){
    console.log("Es positivo")
}else if(numero === 0){
    console.log("Es cero")
}
else{
    console.log("Es negativo")
}


let puedePasar = prompt("Ingrese el color del semaforo")

const amarillo = document.getElementById("amarillo")
const rojo = document.getElementById("rojo")
const verde = document.getElementById("verde")
amarillo.style.backgroundColor = "yellow"
rojo.style.backgroundColor = "red"
verde.style.backgroundColor = "green"



if(puedePasar == "verde"){
    amarillo.classList.add("chau")
    rojo.classList.add("chau")
}else if(puedePasar == "amarillo"){
    verde.classList.add("chau")
    rojo.classList.add("chau")
}else{
    verde.classList.add("chau")
    amarillo.classList.add("chau")
}


