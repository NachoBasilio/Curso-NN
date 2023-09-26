const root = document.getElementById("root");

import { productos } from "./productos";


const tablaTrabajo = document.createElement("div");


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
    contenedorTipo.innerText = `Tipo: ${this.tipo}`;
    contenedorTipo.classList.add("tipo");
    
    const contenedorModelo = document.createElement("p");
    contenedorModelo.innerText = `Modelo: ${this.modelo}`;
    contenedorTipo.classList.add("modelo");

    const contenedorMarca = document.createElement("p");
    contenedorMarca.innerText = `Marca: ${this.marca}`;
    contenedorTipo.classList.add("marca");

    const contenedorStock = document.createElement("p");
    contenedorStock.innerText = `Stock: ${this.stock}`;
    contenedorTipo.classList.add("stock");

    const contenedorPrecio = document.createElement("p");
    contenedorPrecio.innerText = `Precio: ${this.precio}`;
    contenedorTipo.classList.add("precio");

    const contenedorImagen = document.createElement("img");
    contenedorImagen.src = `${this.foto}`;
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

productosArray.forEach(objeto =>{
  const nodoProducto = objeto.creadorNodoProductos();
  tablaTrabajo.appendChild(nodoProducto);
  const separador1 = document.createElement("br");
  const separador2 = document.createElement("hr");
  tablaTrabajo.appendChild(separador1);
  tablaTrabajo.appendChild(separador2);
})

root.appendChild(tablaTrabajo);