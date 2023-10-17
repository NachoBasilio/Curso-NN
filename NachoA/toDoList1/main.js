const root = document.getElementById("root");
root.classList.add("todo");

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

const areaTrabajo = document.createElement("div");
areaTrabajo.classList.add("areaTrabajo");

const titulo2 = document.createElement("h3");
titulo2.innerText = "Listas creadas:";

areaTrabajo.appendChild(titulo2);

const formulario = document.createElement("form");
const escribirLista = document.createElement("input");
escribirLista.type=("text");
const boton = document.createElement("input");
boton.type=("submit");
boton.innerText="crear!";

formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  const listaNueva = document.createElement("div");
  listaNueva.classList.add("listaNueva");
  const lista = document.createElement("p");
  lista.classList.add("lista");
  const valor = e.target[0].value;
  lista.innerText = valor;

  const botonRealizado = document.createElement("button");
  botonRealizado.innerText="Realizado!"

  const botonEliminar = document.createElement("button");
  botonEliminar.innerText="Eliminar";

  const botonRealizadoDesmarcar = document.createElement("button");
  botonRealizadoDesmarcar.innerText="Desmarcar";

  botonEliminar.addEventListener("click",()=>{
    listaNueva.removeChild(lista);
    listaNueva.removeChild(botonEliminar);
    listaNueva.removeChild(botonRealizado);
    listaNueva.removeChild(botonRealizadoDesmarcar);
  });

  botonRealizado.addEventListener("click",()=>{
    lista.classList.add("realizado");
  })

  botonRealizadoDesmarcar.addEventListener("click",()=>{
    if (lista.classList.contains("realizado")) {
      lista.classList.remove("realizado"); 
    }
  })


  listaNueva.appendChild(lista);
  listaNueva.appendChild(botonRealizado);
  listaNueva.appendChild(botonRealizadoDesmarcar)
  listaNueva.appendChild(botonEliminar);
  areaTrabajo.appendChild(listaNueva);
  listasCreadas.appendChild(areaTrabajo);
  
  e.target[0].value = "";


})

formulario.appendChild(escribirLista);
formulario.appendChild(boton);

main.appendChild(formulario);
main.appendChild(listasCreadas);
root.appendChild(main);

