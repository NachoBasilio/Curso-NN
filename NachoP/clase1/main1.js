const titulo = "<h2> Hola </h2>"
const titulo2 = document.createElement("h2")
titulo2.innerText = "Hola"
console.log(titulo2)

const root = document.getElementById("root")

root.innerHTML = titulo
root.appendChild(titulo2)
