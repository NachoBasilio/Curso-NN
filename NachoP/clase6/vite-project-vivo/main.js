import "./style.css"
import figurasPokemon from "./datos" //datos

const app = document.getElementById("app")

const contenedorProductos = document.createElement("div")
contenedorProductos.classList.add("contenedor-mayor")

const botonCarrito = document.createElement("button")
botonCarrito.innerText = "Carrito"


//Modal
const tituloModal = document.createElement("h3")
tituloModal.innerText = "Carrito"

const botonModal = document.createElement("button")
botonModal.innerText = "Carrito"

const contenedorCarrito = document.createElement("div")
contenedorCarrito.classList.add("carrito")

const modal = document.createElement("div")
modal.classList.add("carrito-contenedor")
modal.classList.add("modalOff")



modal.appendChild(tituloModal)
modal.appendChild(contenedorCarrito)
modal.appendChild(botonModal)
//Modal



const carrito = []


class NodoFigura {
  constructor(nombre, precio, imagen, tipo, stock, generacion, id) {
    this.nombre = nombre
    this.precio = precio
    this.imagen = imagen
    this.tipo = tipo
    this.stock = stock
    this.generacion = generacion
    this.id = id
    this.stockCarrito = 1
  }

  creadoraDeProductos(nodoPadre, evento){
    const contenedor = document.createElement("div")
    contenedor.classList.add("contenedor")

    const nombreNodo = document.createElement("h3")
    const precioNodo = document.createElement("p")
    const imagenNodo = document.createElement("img")
    const tipoNodo = document.createElement("p")
    const stockNodo = document.createElement("p")
    const generacionNodo = document.createElement("generacion")


    nombreNodo.innerText = this.nombre
    precioNodo.innerText = this.precio
    imagenNodo.src = this.imagen
    tipoNodo.innerText = this.tipo
    stockNodo.innerText = this.stock
    generacionNodo.innerText = this.generacion

    const boton = document.createElement("button")
    boton.innerText = "Agregar"
    boton.addEventListener("click", ()=>{
      evento(this)
    })

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(precioNodo)
    contenedor.appendChild(imagenNodo)
    contenedor.appendChild(tipoNodo)
    contenedor.appendChild(stockNodo)
    contenedor.appendChild(generacionNodo)
    contenedor.appendChild(boton)

  
    
    nodoPadre.appendChild(contenedor)
  }

  creadoraDeProductosCarrito(nodoPadre, evento){
    const contenedor = document.createElement("div")
    contenedor.classList.add("contenedor-carrito")

    const nombreNodo = document.createElement("h3")
    const precioNodo = document.createElement("p")
    const imagenNodo = document.createElement("img")
   
    const stockNodo = document.createElement("p")
  

    
    nombreNodo.innerText = this.nombre
    precioNodo.innerText = this.precio
    imagenNodo.src = this.imagen
   
    stockNodo.innerText = this.stockCarrito 
  



    const boton = document.createElement("button")
    boton.innerText = "Eliminar"
    boton.addEventListener("click", ()=>{
      evento(this.id)
    })

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(precioNodo)
    contenedor.appendChild(imagenNodo)

    contenedor.appendChild(stockNodo)

    contenedor.appendChild(boton)
 
    nodoPadre.appendChild(contenedor)
  }
  
}


//instancia
const arrayNodos = figurasPokemon.map(figura=>{
  return new NodoFigura(
    figura.nombre,
    figura.precio,
    figura.imagen,
    figura.tipo,
    figura.stock,
    figura.generacion,
    figura.id
  )
})


//Eliminar carrito

const eventoEliminar = (id)=>{
  const idAEliminar = carrito.findIndex((producto)=>{
    return producto.id == id
  })
  
  if(carrito[idAEliminar].stockCarrito > 1){
    carrito[idAEliminar].stockCarrito = carrito[idAEliminar].stockCarrito -1
  }else{
    carrito.splice(idAEliminar, 1);
  }
  ActualizarAlCarrito()
}


//Agregar al carrito
const eventoAgregar = (referencia)=>{
  const idAEliminar = carrito.findIndex((producto)=>{
    return producto.id == referencia.id
  })


  bajaDeStock(referencia.id)

  if(idAEliminar == -1){
    carrito.push(referencia)
    ActualizarAlCarrito()
  }else{
    referencia.stockCarrito = referencia.stockCarrito + 1
    ActualizarAlCarrito()
  }
}


const ActualizarAlCarrito = ()=>{
  contenedorCarrito.innerText = ""

  if(carrito.length >= 1){
    carrito.forEach((figura)=>{  
      figura.creadoraDeProductosCarrito(contenedorCarrito, eventoEliminar)
      })
  }else{
    contenedorCarrito.innerText = "No hay nada en el carrito aun"
  }

}


//Logica del boton
botonCarrito.addEventListener("click", ()=>{
  modal.classList.remove("modalOff")
  ActualizarAlCarrito()
})

botonModal.addEventListener("click", ()=>{
  modal.classList.add("modalOff")
})

window.addEventListener("dblclick", (e)=> {
  
  if (!modal.contains(e.target)) { //EL e.target es donde se dispara el evento, si esta contenido por el modal no saltara esta parte
    modal.classList.add("modalOff")
  }
  
})

//stock
const bajaDeStock = (id)=>{
  const indice = arrayNodos.findIndex((producto)=>{
    return producto.id == id
  })
  arrayNodos[indice].stock = arrayNodos[indice].stock - 1
  actualizarPantalla()
}

const actualizarPantalla = ()=>{
  contenedorProductos.innerText = ""
  arrayNodos.forEach(objeto=>{
    objeto.creadoraDeProductos(contenedorProductos, eventoAgregar)
  })
}


window.addEventListener("DOMContentLoaded",()=>{
  actualizarPantalla()
})


app.appendChild(contenedorProductos)
app.appendChild(botonCarrito)
app.appendChild(modal)