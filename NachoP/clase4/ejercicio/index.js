const root = document.getElementById("root")

const objetos = {

}


class Todo {
    constructor(desc, comp, img){
        this.desc = desc
        this.comp = comp
        this.img = img
    }

    
    tituladora(nodo){
        const p = document.createElement("p")
        p.innerText = this.desc
        nodo.appendChild(p)
    }

    pintadora(nodo){
        const img = document.createElement("img")
        img.src = this.img
        nodo.appendChild(img)
    }

    completadora(nodo){
        if(this.comp){
            const p = document.createElement("p")
            p.innerText = "Tabien"
            nodo.appendChild(p)
        }else{
            const p = document.createElement("p")
            p.innerText = "Tamal"
            nodo.appendChild(p)
        }

    }

    credora(){
        const nodo = document.createElement("div")
        
        this.tituladora(nodo)
        this.pintadora(nodo)
        this.completadora(nodo)
        return nodo
    }

}



const todo = new Todo("lorem", true, "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png" )

root.appendChild(todo.credora())
