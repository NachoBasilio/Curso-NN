const root = document.getElementById("root");

const main = document.createElement("div");
main.classList.add("main");
const listasCreadas = document.createElement("div");
listasCreadas.classList.add("listasCreadas");

const titulo1 = document.createElement("h1");
titulo1.innerText="toDoList";
titulo1.classList.add("titulo1");

const instruccion = document.createElement("p");
instruccion.innerText="Escriba la lista que desee abajo ↓";


main.appendChild(titulo1);
main.appendChild(instruccion);

const formulario = document.createElement("form");
const escribirLista = document.createElement("input");
escribirLista.type=("text");
const boton = document.createElement("input");
boton.type=("submit");
boton.innerText="crear!";

formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  const lista = document.createElement("p");
  lista.classList.add("lista");
  const valor = e.target[0].value;
  lista.innerText = valor;

  const botonRealizado = document.createElement("button");
  botonRealizado.innerText="Realizado!"

  const botonEliminar = document.createElement("button");
  botonEliminar.innerText="Eliminar";

  botonEliminar.addEventListener("click",()=>{
    listasCreadas.removeChild(lista);
    listasCreadas.removeChild(botonEliminar);
    listasCreadas.removeChild(botonRealizado);
  });


  listasCreadas.appendChild(lista);
  listasCreadas.appendChild(botonRealizado);
  listasCreadas.appendChild(botonEliminar);
  
  e.target[0].value = "";


})

formulario.appendChild(escribirLista);
formulario.appendChild(boton);

main.appendChild(formulario);
main.appendChild(listasCreadas);
root.appendChild(main);

