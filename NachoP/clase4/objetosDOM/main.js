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


// class NodoTitulo extends NodoMadre{
//   constructor(etiqueta){
//     super(etiqueta)
//     this.nodo = null
//   } 


//   unSoloH1(){
//     if(this.etiqueta == "h1"){
//       return true
//     }
//     return false
//   }

//   imprenta(contenido){
//     if(contenido != "" && contenido != undefined){
//       this.nodo.innerText = contenido
//       console.log(contenido)
//     }else{
//       //throw new Error("Esta vacio el titulo")
//     }
//   }

//   creadora(){
//     this.nodo = document.createElement(this.etiqueta)
//     return nodo
//   }


// }

class NodoIMG extends NodoMadre{
  constructor(etiqueta, url){
    super(etiqueta)
    this.url = url
    
  }

  creadora(){
    const imgNodo = document.createElement(this.etiqueta)
    imgNodo.src = this.url
    return imgNodo
  }

}


// let bandera = false
// titulos.forEach((titulo)=>{
//   const tituloObj = new NodoTitulo(titulo.h)//objeto


//   if(bandera){
//     if(tituloObj.unSoloH1()){
//       return
//     } else{
//       const tituloVariable = tituloObj.creadora() //refe a nodo
//       tituloObj.imprenta(titulo.titulo)
//       app.appendChild(tituloVariable)
//     }
//   }


//   const tituloVariable = tituloObj.creadora() //refe a nodo
//   tituloObj.imprenta(titulo.titulo)
//   app.appendChild(tituloVariable)


//   if(tituloObj.unSoloH1()){
//     bandera = true
//   } 
  
// })


const img = new NodoIMG("img","https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg")

app.appendChild(img.creadora())