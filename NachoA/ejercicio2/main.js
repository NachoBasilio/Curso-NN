const root = document.getElementById("root");


const formulario = document.createElement("form")

const text1 = document.createElement("p");
text1.innerText = "Elija titulo";
const text2 = document.createElement("p");
text2.innerText = "Agrege una breve descripcion";
const text3 = document.createElement("p");
text3.innerText = "Agregue direccion de imagen";

const input1 = document.createElement("input");
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "text";

const submitEnviar = document.createElement("button");
submitEnviar.innerText = "Enviar";

const seleccImagen = document.createElement("input");
seleccImagen.type="text";

const contenedor1 = document.createElement("div");



formulario.appendChild(text1);
formulario.appendChild(input1);
formulario.appendChild(text2);
formulario.appendChild(input2);
formulario.appendChild(text3);
formulario.appendChild(seleccImagen);
formulario.appendChild(submitEnviar);



//creador de nodo
const creaNodoFormulario = (titulo,descripcion, url)=>{
    const nombreTitulo = document.createElement("h4");
    const textoDescripcion = document.createElement("p");
    const imagen = document.createElement("img");
    const separador = document.createElement("hr");
    const contenedor1 = document.createElement("div");
    contenedor1.classList.add("contenedorDeNodo");

    nombreTitulo.innerText = titulo;
    nombreTitulo.classList.add("titulo");
    textoDescripcion.innerText = descripcion;
    textoDescripcion.classList.add("descripcion");
    imagen.src = url;
    imagen.classList.add("imagen");

    contenedor1.appendChild(nombreTitulo);
    contenedor1.appendChild(textoDescripcion);
    contenedor1.appendChild(imagen);
    contenedor1.appendChild(separador);

    return (contenedor1);
    
}


formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    const nodoTitulo = e.target[0].value;
    const nodoDesc = e.target[1].value;
    const nodoImg = e.target[2].value;
    const mensajeError = `Le faltó rellenar un campo`;

    if (nodoTitulo && nodoDesc && nodoImg){

        const nuevoNodo = creaNodoFormulario(nodoTitulo,nodoDesc,nodoImg);

        contenedor1.appendChild(nuevoNodo);

        root.appendChild(contenedor1);

    } else {
        const divError = document.createElement("p");
        divError.innerText = mensajeError;
        contenedor1.appendChild(divError);
        root.appendChild(contenedor1);
    }

})

root.appendChild(formulario);
