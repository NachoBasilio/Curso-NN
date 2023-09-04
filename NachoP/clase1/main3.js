const form = document.getElementById("miForm");
const root = document.getElementById("root")
const listaDePersonas=[
    {
        nombre:"Nacho",
        edad: 25
    },
    {
        nombre:"Nacho",
        edad: 28
    },
    {
        nombre:"Juan",
        edad: 22
    },
    {
        nombre:"Nacho",
        edad: 25
    },
    {
        nombre:"Nacho",
        edad: 28
    },
    {
        nombre:"Juan",
        edad: 22
    },
    {
        nombre:"Nacho",
        edad: 25
    },
    {
        nombre:"Nacho",
        edad: 28
    },
    {
        nombre:"Juan",
        edad: 22
    },
    {
        nombre:"Nacho",
        edad: 25
    },
    {
        nombre:"Nacho",
        edad: 28
    },
    {
        nombre:"Juan",
        edad: 22
    },
    {
        nombre:"Nacho",
        edad: 25
    },
    {
        nombre:"Nacho",
        edad: 28
    },
    {
        nombre:"Juan",
        edad: 22
    },
]



const creadoraCards = (nombre, edadPersona)=>{
    const contenedor = document.createElement("div")

    const titulo = document.createElement("h3")
    const edad = document.createElement("p")

    titulo.innerText = nombre
    edad.innerText = edadPersona


    contenedor.appendChild(titulo)
    contenedor.appendChild(edad)

    root.appendChild(contenedor)
}


const creadoraCardsForm = (nombre)=>{
    const contenedor = document.createElement("div")

    const titulo = document.createElement("h3")

    titulo.innerText = nombre

    contenedor.appendChild(titulo)

    root.appendChild(contenedor)
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = e.target[0].value
    if(value == "") {
        alert("Tiene que escribir un nombre")
    }
    creadoraCardsForm(value)
    e.target[0].value =""

});

// boton.addEventListener("click", (e) => {
//     console.log(e.target)
//     const botonHTML = e.target 
// });


document.addEventListener("DOMContentLoaded", ()=>{
    listaDePersonas.forEach((persona)=>{
        creadoraCards(persona.nombre, persona.edad)
    })
})

//Cambio para probar algo
