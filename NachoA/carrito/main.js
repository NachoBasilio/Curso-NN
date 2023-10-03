const root = document.getElementById("root");

import { productos } from "./productos";


const tablaTrabajo = document.createElement("div");
tablaTrabajo.classList.add("tablaTrabajo");

const carrito = [];

class NodoProductos {
  constructor (tipo, modelo, marca, stock, precio, foto ){
    this.tipo = tipo;
    this.modelo = modelo;
    this.marca = marca;
    this.stock = stock;
    this.precio = precio;
    this.foto = foto
  }

  creadorNodoProductos (evento) {
    
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("contenedorProducto");

    const contenedorTipo = document.createElement("p");
    contenedorTipo.innerText = `Tipo: ${this.tipo}`;
    contenedorTipo.classList.add("tipo");
    
    const contenedorModelo = document.createElement("p");
    contenedorModelo.innerText = `Modelo: ${this.modelo}`;
    contenedorModelo.classList.add("modelo");

    const contenedorMarca = document.createElement("p");
    contenedorMarca.innerText = `Marca: ${this.marca}`;
    contenedorMarca.classList.add("marca");

    const contenedorStock = document.createElement("p");
    contenedorStock.innerText = `Stock: ${this.stock}`;
    contenedorStock.classList.add("stock");

    const contenedorPrecio = document.createElement("p");
    contenedorPrecio.innerText = `Precio: ${this.precio}`;
    contenedorPrecio.classList.add("precio");

    const contenedorImagen = document.createElement("img");
    contenedorImagen.src = `${this.foto}`;
    contenedorImagen.classList.add("foto");

    const boton = document.createElement("button")
    boton.innerText="Comprar!";
    boton.classList.add("botonProducto");
    boton.addEventListener("click", ()=>{
      evento(this);
    })

    contenedorProducto.appendChild(contenedorTipo);
    contenedorProducto.appendChild(contenedorModelo);
    contenedorProducto.appendChild(contenedorMarca);
    contenedorProducto.appendChild(contenedorImagen);
    contenedorProducto.appendChild(contenedorPrecio);
    contenedorProducto.appendChild(contenedorStock);
    contenedorProducto.appendChild(boton);

    return contenedorProducto;
  }
}

const productosArray = productos.map((producto)=>{
  return new NodoProductos(
    producto.tipo,
    producto.modelo,
    producto.marca,
    producto.stock,
    producto.precio,
    producto.foto
  );
});

const eventoAgregar = (referencia) =>{
  carrito.push(referencia);
  console.log(carrito);
}

productosArray.forEach(objeto =>{
  const nodoProducto = objeto.creadorNodoProductos(eventoAgregar);
  tablaTrabajo.appendChild(nodoProducto);
})



root.appendChild(tablaTrabajo);