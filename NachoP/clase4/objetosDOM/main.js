const app = document.getElementById("app")


const titulos =[
  {
    titulo: "loremasdas",
    h: "h1"  
  },
  {
    titulo: "",
    h: "h2"  
  },
  {
    titulo: "loremasdas",
    h: "h5"  
  },
  {
    titulo: "loremasdas",
    h: "h1"  
  },
  {
    titulo: "loremasdas",
    h: "h5"  
  }
]

class NodoMadre{
  constructor(etiqueta){
    this.etiqueta = etiqueta
  }

  creadora(){
    return document.createElement(this.etiqueta)
  }

}


class NodoTitulo extends NodoMadre{
  constructor(etiqueta){
    super(etiqueta)
    this.nodo = null
  } 

  creadora(){
    this.nodo = document.createElement(this.etiqueta)
    return this.nodo
  }

  unSoloH1(){
    if(this.etiqueta == "h1"){
      return true
    }
    return false
  }

  imprenta(contenido){
    if(contenido != "" && contenido != undefined){
      this.nodo.innerText = contenido
      console.log(contenido)
    }else{
      //throw new Error("Esta vacio el titulo")
    }
  }

}


let bandera = false
titulos.forEach((titulo)=>{
  const tituloObj = new NodoTitulo(titulo.h)//objeto


  if(bandera){
    if(tituloObj.unSoloH1()){
      return
    } else{
      const tituloVariable = tituloObj.creadora() //refe a nodo
      tituloObj.imprenta(titulo.titulo)
      app.appendChild(tituloVariable)
    }
  }


  const tituloVariable = tituloObj.creadora() //refe a nodo
  tituloObj.imprenta(titulo.titulo)
  app.appendChild(tituloVariable)


  if(tituloObj.unSoloH1()){
    bandera = true
  } 
  
})