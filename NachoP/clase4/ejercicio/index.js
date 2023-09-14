const root = document.getElementById("root")

const objetos = {

}


class Todo {
    constructor(desc, comp, img){
        this.desc = desc
        this.comp = comp
        this.img = img
    }

    
    tituladora(p){
        p.innerText = this.desc 
    }

    pintadora(img){
        img.src = this.img
    }

    completadora(p){
        if(this.comp){
            p.innerText = "Tabien"
            
        }else{
            p.innerText = "Tamal"
        }

    }

    credora(){
        const nodo = document.createElement("div")
        const p = document.createElement("p")
        const p2 = document.createElement("p")
        const img = document.createElement("img")
        
        

        
        this.tituladora(p)
        this.pintadora(img)
        this.completadora(p2)


        nodo.appendChild(p)
        nodo.appendChild(img)
        nodo.appendChild(p2)
        
        return nodo
    }

}



const todo = new Todo("lorem", true, "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png" )

root.appendChild(todo.credora())