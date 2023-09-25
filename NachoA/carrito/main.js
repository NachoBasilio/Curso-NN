const root = document.getElementById("root");

import { productos } from "./productos";

class NodoProductos {
  constructor (tipo, modelo, marca, stock, precio, foto ){
    this.tipo = tipo;
    this.modelo = modelo;
    this.marca = marca;
    this.stock = stock;
    this.precio = precio;
    this.foto = foto
  }

  creadorNodoProductos () {
    
    const contenedorProducto = document.createElement("div");

    const contenedorTipo = document.createElement("p");
    contenedorTipo.innerText = `Tipo: ${productos.tipo}`;
    contenedorTipo.classList.add("tipo");

    const contenedorModelo = document.createElement("p");
    contenedorModelo.innerText = `Modelo: ${productos.modelo}`;
    contenedorTipo.classList.add("modelo");

    const contenedorMarca = document.createElement("p");
    contenedorMarca.innerText = `Marca: ${productos.marca}`;
    contenedorTipo.classList.add("marca");

    const contenedorStock = document.createElement("p");
    contenedorStock.innerText = `Stock: ${productos.stock}`;
    contenedorTipo.classList.add("stock");

    const contenedorPrecio = document.createElement("p");
    contenedorPrecio.innerText = `Precio: ${productos.precio}`;
    contenedorTipo.classList.add("precio");

    const contenedorImagen = document.createElement("img");
    contenedorImagen.src = `${productos.foto}`;
    contenedorTipo.classList.add("foto");

    contenedorProducto.appendChild(contenedorTipo);
    contenedorProducto.appendChild(contenedorModelo);
    contenedorProducto.appendChild(contenedorMarca);
    contenedorProducto.appendChild(contenedorImagen);
    contenedorProducto.appendChild(contenedorPrecio);
    contenedorProducto.appendChild(contenedorStock);

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


productosArray.forEach((producto) => {
  root.appendChild(producto.creadorNodoProductos()); // Cambiar "crearNodoProducto" a "creadorNodoProductos"
});
