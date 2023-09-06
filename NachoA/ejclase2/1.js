const root = document.getElementById("root");


const tabla = document.createElement("form")

const text1 = document.createElement("p");
text1.innerText = "Elija titulo";
const text2 = document.createElement("p");
text2.innerText = "Agrege una breve descripcion";

const input1 = document.createElement("input");
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "text";

const submitEnviar = document.createElement("button");
submitEnviar.innerText = "Enviar";

const seleccImagen = document.createElement("input");
seleccImagen.type="file";


tabla.addEventListener("submit", (e)=>{
    e.preventDefault()
    const imagen = document.createElement("img");
    

    

    const url = URL.createObjectURL(e.target[2].files[0])
    imagen.src = url;
    
    console.log(imagen)
    root.appendChild(imagen)
})


//creador de nodo
const creaNodoFormulario = (titulo,descripcion)=>{
    const nombreTitulo = document.createElement("h4");
    const textoDescripcion = document.createElement("p");

    const contenedor = document.createElement("div");
    const img = document.createElement("input");
    img.type="text";
    

    const separador = document.createElement("hr");

    nombreTitulo.innerText = titulo;
    textoDescripcion.innerText = descripcion;

    contenedor.appendChild(nombreTitulo);
    contenedor.appendChild(textoDescripcion);
    contenedor.appendChild(img);
    contenedor.appendChild(separador);

    return (contenedor);
    
}




tabla.appendChild(text1);
tabla.appendChild(input1);
tabla.appendChild(text2);
tabla.appendChild(input2);
tabla.appendChild(seleccImagen);
tabla.appendChild(submitEnviar);



root.appendChild(tabla);


// const formulario = creaNodo("hola","hola123412");

// root.appendChild(formulario);