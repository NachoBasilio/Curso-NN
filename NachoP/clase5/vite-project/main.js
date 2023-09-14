import "./style.css"

const app = document.getElementById("app")

const contenedorProductos = document.createElement("div")
contenedorProductos.classList.add("contenedor-mayor")


const contenedorCarrito = document.createElement("div")
contenedorCarrito.classList.add("carrito")
const carrito = []

const figurasPokemon = [
  {
    nombre: "Pikachu",
    precio: 15.99,
    imagen: "https://mostlygames.com.ar/wp-content/uploads/2022/10/Lumii_20221024_141338930_compress8.jpg",
    tipo: "Eléctrico",
    stock: 50,
    generacion: "Primera Generación",
    id: 1
  },
  {
    nombre: "Charizard",
    precio: 24.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_802278-MLA53074143372_122022-O.webp",
    tipo: "Fuego/Volador",
    stock: 30,
    generacion: "Primera Generación",
    id: 2
  },
  {
    nombre: "Eevee",
    precio: 12.99,
    imagen: "https://i0.wp.com/teknofun-entertainment.com/medias/uploads/2017/07/PK_811242_EEVEE_LED_LAMP_30cm_F_D.jpg?fit=1030%2C1030&ssl=1",
    tipo: "Normal",
    stock: 60,
    generacion: "Primera Generación",
    id: 3
  },
  {
    nombre: "Mewtwo",
    precio: 29.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_650796-MLA48736842491_012022-O.webp",
    tipo: "Psíquico",
    stock: 20,
    generacion: "Primera Generación",
    id: 4
  },
  {
    nombre: "Greninja",
    precio: 18.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_654056-MLM49059106819_022022-O.webp",
    tipo: "Agua/Siniestro",
    stock: 25,
    generacion: "Sexta Generación",
    id: 5
  },
  {
    nombre: "Lucario",
    precio: 22.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_677622-MLM52824609905_122022-O.webp",
    tipo: "Lucha/Acero",
    stock: 40,
    generacion: "Cuarta Generación",
    id: 6
  },
  {
    nombre: "Garchomp",
    precio: 19.99,
    imagen: "https://pbs.twimg.com/media/Ezj96BQXsAUhH_Q.jpg",
    tipo: "Dragón/Tierra",
    stock: 35,
    generacion: "Cuarta Generación",
    id: 7
  },
  {
    nombre: "Incineroar",
    precio: 21.99,
    imagen: "https://m.media-amazon.com/images/I/61UbZXZubQL._AC_UF894,1000_QL80_.jpg",
    tipo: "Fuego/Siniestro",
    stock: 28,
    generacion: "Séptima Generación",
    id: 8
  },
];


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
    stockNodo.innerText = this.stockCarrito 
    generacionNodo.innerText = this.generacion



    const boton = document.createElement("button")
    boton.innerText = "Eliminar"
    boton.addEventListener("click", ()=>{
      evento(this.id)
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
  
}


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
  agregarAlCarrito()
}

//Agregar al carrito
const agregarAlCarrito = ()=>{
  contenedorCarrito.innerText = ""
  carrito.forEach((figura)=>{


    
    figura.creadoraDeProductosCarrito(contenedorCarrito, eventoEliminar)
    

  })
}

const eventoAgregar = (referencia)=>{
  const idAEliminar = carrito.findIndex((producto)=>{
    return producto.id == referencia.id
  })

  if(idAEliminar == -1){
    carrito.push(referencia)
    agregarAlCarrito()
  }else{
    referencia.stockCarrito = referencia.stockCarrito + 1
    agregarAlCarrito()
  }

  
  
}

arrayNodos.forEach(objeto=>{
  objeto.creadoraDeProductos(contenedorProductos, eventoAgregar)
})




app.appendChild(contenedorProductos)
app.appendChild(contenedorCarrito)