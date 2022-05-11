//OBJETOS
let producto1={
    nombre:"producto1",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/acordeon.jpg?alt=media&token=c4a54e8f-fc79-42b7-ad6f-cc2acb643f9c"
}

let producto2={
    nombre:"producto2",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/amplificador%20de%20sonido.jfif?alt=media&token=b7dce230-71fb-4df9-977d-1e8fcb70dac5"
}

let producto3={
    nombre:"producto3",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/atril%20partitura.jpg?alt=media&token=da125537-3937-4c7a-96a4-d5ff039f4776"
}

let producto4={
    nombre:"producto4",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/bateria%20acustica...jfif?alt=media&token=204c33ae-213e-4ccc-9ed9-0e2366bece99"
}

let producto5={
    nombre:"producto5",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/bateria%20electrica.jfif?alt=media&token=25281c6d-e50a-4d19-9785-fd451b694068"
}

let producto6={
    nombre:"producto6",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/caja%20peruana.jpg?alt=media&token=66bcc255-8ea0-4ace-812a-9c68bfb41f86"
}

let producto7={
    nombre:"producto7",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/consolade%20sonido.jfif?alt=media&token=63bc8a75-be77-448f-8740-6d7bf899580a"
}

let producto8={
    nombre:"producto8",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/guitarra%20acustica.jpg?alt=media&token=5a947332-ed70-4c60-8670-d9ca18e8d2bb"
}

let producto9={
    nombre:"producto9",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/guitarra%20electrica.jpg?alt=media&token=975c7cb4-0308-404c-ab07-d7b655ba30a1"
}

let producto10={
    nombre:"producto10",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/maracas.jpg?alt=media&token=b07b6fc6-b4f9-4b4c-989f-dbf13e7bae39"
}

let producto11={
    nombre:"producto11",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/microfono.jpg?alt=media&token=b540d276-e039-424a-9bf3-3193ce71e1ce"
}

let producto12={
    nombre:"producto12",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/piano%20acustico.jfif?alt=media&token=26e8dca7-3769-4cb9-a93a-969403b889f4"
}

let producto13={
    nombre:"producto13",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/piano.png?alt=media&token=4b369b19-7197-4a53-bb99-0cc116d6d8b9"
}

let producto14={
    nombre:"producto14",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/puntillas%20de%20guitarra.jfif?alt=media&token=b6714feb-ccd8-472d-bd60-336f54046f6b"
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/clinica-del-play-a68aa.appspot.com/o/redoblante%20sinfonico.jpg?alt=media&token=a5c577e3-46ac-4247-9725-47e862a35dbc"
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

//RECORRO EL ARREGLO
let container = document.getElementById("container")
productos.forEach(function(producto){

    let foto = document.createElement("img")
    foto.classList.add("w-100" , "img-fluid")
    foto.src = producto.foto
    let columna = document.createElement("div")
    columna.classList.add("col")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    container.appendChild(columna)








    
})

