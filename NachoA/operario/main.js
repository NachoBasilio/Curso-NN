const root = document.getElementById("root");

const titulo = document.createElement("h1");
titulo.innerText="Operarios - Capitel";

root.appendChild(titulo);

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
    }
   
]

const fichasTrabajadores = document.createElement("div");

trabajadores.forEach(trabajador => {
    fichaTrabajador = document.createElement("div");

    const nombreElemento = document.createElement("p");
    nombreElemento.innerText = `Nombre: ${trabajador.nombre}`;
    const dniElemento = document.createElement("p");
    dniElemento.innerText = `DNI: ${trabajador.dni}`;
    const fechaNacElemento = document.createElement("p");
    fechaNacElemento.innerText = `Fecha de nacimiento: ${trabajador.fechaNac}`;
    const telefonoElemento = document.createElement("p");
    telefonoElemento.innerText = `Telefono de contacto ${trabajador.telefono}`;
    const puestoElemento = document.createElement("p");
    puestoElemento.innerText = `Puesto: ${trabajador.puesto}`;
    const fotoElemento = document.createElement("img");
    fotoElemento.src = trabajador.foto;


fichaTrabajador.appendChild(nombreElemento);
fichaTrabajador.appendChild(dniElemento);
fichaTrabajador.appendChild(fechaNacElemento);
fichaTrabajador.appendChild(telefonoElemento);
fichaTrabajador.appendChild(puestoElemento);
fichaTrabajador.appendChild(fotoElemento);

fichasTrabajadores.appendChild(fichaTrabajador);


})

root.appendChild(fichasTrabajadores);




class NodoCreation {
    constructor(nombre,dni,fechaNac,telefono,puesto, foto){
        this.nombre = nombre;
        this.dni = dni;
        this.fechaNac = fechaNac;
        this.telefono = telefono;
        this.puesto = puesto;
        this.foto = foto;

    }

    creadorOperario() {
        const contenedorOperario = document.createElement("div");

        const nombreOperario = document.createElement("b");
        const dniOperario = document.createElement("p");
        const fechaNOperario = document.createElement("p");
        const telefonoOperario = document.createElement("p");
        const puestoOperario = document.createElement("p");
        const fotoOperario = document.createElement("img");

        nombreOperario.innerText = this.nombre;
        dniOperario.innerText = this.dni;
        fechaNOperario.innerText = this.fechaNac;
        telefonoOperario.innerText = this.telefono;
        puestoOperario.innerText = this.puesto;
        fotoOperario.src = this.foto;

        contenedorOperario.appendChild(nombreOperario);
        contenedorOperario.appendChild(dniOperario);
        contenedorOperario.appendChild(fechaNOperario);
        contenedorOperario.appendChild(telefonoOperario);
        contenedorOperario.appendChild(puestoOperario);
        contenedorOperario.appendChild(fotoOperario);

        return contenedorOperario
    }




}