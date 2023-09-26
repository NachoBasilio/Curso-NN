const root = document.getElementById("root");

const contenedorTitulo = document.createElement("div");
contenedorTitulo.classList.add("contenedorTitulo");

const titulo = document.createElement("h1");
titulo.innerText="Operarios - Capitel";
titulo.classList.add("titulo");

contenedorTitulo.appendChild(titulo)
root.appendChild(contenedorTitulo);

const contenedorGeneral = document.createElement("div")

const trabajadores = [
    {
        nombre: "Zamo Ignacio",
        dni: "37446027",
        fechaNac: "07/10/1994",
        telefono: "3424212467",
        puesto: "Administrativo B",
        foto: "https://img.freepik.com/vector-premium/hombre-senalar-direccion-caricatura-persona-mano-gesto_533410-3195.jpg?w=2000"
    },
    {
        nombre: "Faurlin Alejanda",
        dni:"34528765",
        fechaNac:"05/03/1987",
        telefono: "3425218567",
        puesto: "Administrativo A",
        foto: "https://previews.123rf.com/images/grgroup/grgroup1610/grgroup161001846/64251039-icono-de-la-mujer-de-dibujos-animados-persona-de-la-gente-de-avatar-y-tema-humano-dise%C3%B1o-aislado.jpg"
    },
    {
        nombre:"Flores Pamelangas",
        dni:"35769987",
        fechaNac:"07/10/1991",
        telefono: "3425664740",
        puesto: "Administrativo C",
        foto: "https://pm1.aminoapps.com/6727/2094cba9ad102b067bb2111df5cf127a6b968b43v2_00.jpg"
    }

   
]

function agregarTrabajador(nombre, dni, fechaNac, telefono, puesto, foto) {

    const nuevoTrabajador = {
        nombre: nombre,
        dni: dni,
        fechaNac: fechaNac,
        telefono: telefono,
        puesto: puesto,
        foto: foto
    };
    
    trabajadores.push(nuevoTrabajador);
}


const fichasTrabajadores = document.createElement("div");
fichasTrabajadores.classList.add("pizarra");


const agregarOperarioFicha = ()=>{
trabajadores.forEach(trabajador => {
    fichaTrabajador = document.createElement("div");
    fichaTrabajador.classList.add("contenedorOperario");

    const nombreElemento = document.createElement("p");
    nombreElemento.innerText = `Nombre: ${trabajador.nombre}`;
    const dniElemento = document.createElement("p");
    dniElemento.innerText = ` DNI: ${trabajador.dni}`;
    const fechaNacElemento = document.createElement("p");
    fechaNacElemento.innerText = `Fecha de nacimiento: ${trabajador.fechaNac}`;
    const telefonoElemento = document.createElement("p");
    telefonoElemento.innerText = `Telefono de contacto ${trabajador.telefono}`;
    const puestoElemento = document.createElement("p");
    puestoElemento.innerText = `Puesto: ${trabajador.puesto}`;
    const fotoElemento = document.createElement("img");
    fotoElemento.classList.add("foto")
    fotoElemento.src = trabajador.foto;


fichaTrabajador.appendChild(nombreElemento);
fichaTrabajador.appendChild(dniElemento);
fichaTrabajador.appendChild(fechaNacElemento);
fichaTrabajador.appendChild(telefonoElemento);
fichaTrabajador.appendChild(puestoElemento);
fichaTrabajador.appendChild(fotoElemento);

fichasTrabajadores.appendChild(fichaTrabajador);

})
}

agregarTrabajador("Nuevo Trabajador", "12345678", "01/01/1990", "1234567890", "Nuevo Puesto", "https://imgs.search.brave.com/IHtJdCP-zDqem_uiseeSEVFwA_s4Fa6jLjsQcefI5T4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0aW9uYWxnZW9n/cmFwaGljLmNvbS5l/cy9tZWRpby8yMDIz/LzA2LzAyL29zby1w/aXJlbmFpY28tbnVl/dmEtMjUtYW5pdmVy/c2FyaW9fMDAwMDAw/MDBfYmRjNjc3NTZf/MjMwNjAyMTI0ODQx/XzgwMHg4MDAuanBn");

agregarOperarioFicha();





root.appendChild(fichasTrabajadores);

