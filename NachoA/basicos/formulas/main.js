const root = document.getElementById("root");

const lugarTrabajo = document.createElement("form");

const baseTriangulo = document.createElement("input");
baseTriangulo.type="number";
const alturaTriangulo = document.createElement("input");
alturaTriangulo.type="number";

const instruccionBase = document.createElement("p");
instruccionBase.innerText ="BASE en cm del triangulo";
const instruccionAltura = document.createElement("p");
instruccionAltura.innerText="ALTURA en cm del triangulo";

const boton = document.createElement("button");
boton.innerText="Calcular!";
const contenedorResultado = document.createElement("p");


lugarTrabajo.appendChild(instruccionBase);
lugarTrabajo.appendChild(baseTriangulo);
lugarTrabajo.appendChild(instruccionAltura);
lugarTrabajo.appendChild(alturaTriangulo);
lugarTrabajo.appendChild(boton);

lugarTrabajo.addEventListener("submit",(e) =>{
    e.preventDefault();
    const valorBase = e.target[0].value;
    const valorAltura = e.target[1].value;

    if (valorBase && valorAltura){
        const superficie = ((valorBase * valorAltura)/2);
        const mensaje = `La superficie de su triangulo es: ${superficie}`;
        contenedorResultado.innerText = mensaje;
        lugarTrabajo.appendChild(contenedorResultado);
    } else {
        const mensaje = `Usted dejó algun valor vacio`;
        contenedorResultado.innerText= mensaje;
        lugarTrabajo.appendChild(contenedorResultado);
    }
}



)





root.appendChild(lugarTrabajo);