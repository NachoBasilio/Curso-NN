const funcionPadre = (sumar)=>{
    sumar()
}


const patito = ()=>{
    console.log(2+2)
}

funcionPadre(patito)