const persona = {
    nombre : "Rengar",
    saludar : function (){
        console.log("buenas soy " + this.nombre)
    }
}


console.log(persona.nombre)
persona.saludar()


Number.prototype.HolaNacho = function () {
    console.log("Buenas")
}

console.log(Number.prototype)
// const frutas ={
//     frutaFavorita : "Manzana",
//     1 : "Pera",
//     34: "Banana"
// }

// const frutasArr = ["Manzana", "Pera"]

// console.log(frutas.frutaFavorita)

