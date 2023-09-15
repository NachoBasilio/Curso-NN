const root = document.getElementById("root");

class Constructor {
    constructor (tit,desc,img) {
    this.tit = tit;
    this.desc = desc;
    this.img = img;
    }

    titulo (t) {
        t.innerText = this.tit;
    }

    descrip(d) {
        d.innerText = this.desc;
    }
    
    imagen (i) {
        i.src = this.img;
    }

    creaNodo (){
        const nodo = document.createElement("div");
        const titulo = document.createElement("h2");
        const descripcion = document.createElement("p");
        const imagen = document.createElement("img");

        this.titulo(titulo);
        this.descrip(descripcion);
        this.imagen(imagen);

        nodo.appendChild(titulo);
        nodo.appendChild(descripcion);
        nodo.appendChild(imagen);
        
        return nodo;

    }

}

const prueba1 = new Constructor("titulo","breve descripcion de mi persona","https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png")


root.appendChild(prueba1.creaNodo());