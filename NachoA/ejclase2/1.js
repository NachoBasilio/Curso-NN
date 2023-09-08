const root = document.getElementById("root");


const tabla = document.createElement("form")

const text1 = document.createElement("p");
text1.innerText = "Elija titulo";
const text2 = document.createElement("p");
text2.innerText = "Agrege una breve descripcion";
const text3 = document.createElement("p");
text3.innerText = "Ingrese link :";

const input1 = document.createElement("input");
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "text";
const inputLink = document.createElement("input");
input1.type="text";

const submitEnviar = document.createElement("button");
submitEnviar.innerText = "Subir";


tabla.appendChild(text1);
tabla.appendChild(input1);
tabla.appendChild(text2);
tabla.appendChild(input2);
tabla.appendChild(text3);
tabla.appendChild(inputLink);
tabla.appendChild(submitEnviar);


const creaNodo = (titulo, descripcion, link) => {
    
}




root.appendChild(tabla);


// const formulario = creaNodo("hola","hola123412");

// root.appendChild(formulario);