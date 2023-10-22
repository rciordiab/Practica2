
// Tipos
type Libro ={
    id:     number;
    title:  string;
    author: string;
    pages:  number;
    genre:  string;
}
type Biblioteca={
    libros: Libro[]
}
let libreria: Biblioteca = {
    libros: []
}
let NLibro: Libro = {
    id: 0,
    title: "L0",
    author: "A0",
    pages: 3,
    genre: "Accion",
};
let NLibro1: Libro = {
    id: 1,
    title: "L1",
    author: "A1",
    pages: 21,
    genre: "Romance",
};
let NLibro2: Libro = {
    id: 2,
    title: "L2",
    author: "A2",
    pages: 34,
    genre: "Terror",
};
libreria.libros.push(NLibro)
libreria.libros.push(NLibro1)
libreria.libros.push(NLibro2)
let opcion = "1";
while(opcion!=='4'){
    console.log("1 - Crear libro \n2 - Filtrar libro por género \n3 - Borrar libro \n4 - Salir")
    opcion = prompt("Por favor, introduzca su opcion:")
    console.log("Opcion "+ opcion +" escogida")
    if(opcion==="1"){
        let NLibro: Libro = {
            id: 0,
            title: "",
            author: "",
            pages: 0,
            genre: "",
        };
        let paginas
        NLibro.id = libreria.libros.length;
        NLibro.title = prompt("Introduzca el título del libro: ");
        console.log("TITULO: "+ NLibro.title)
        NLibro.author = prompt("Introduzca el autor del libro: ")
        console.log("AUTOR: "+ NLibro.author)
        paginas = prompt("Introduzca el numero de paginas de "+NLibro.title+": ")
        if (!isNaN(paginas)) {
            console.log("NUMERO de paginas es: ", paginas);
            NLibro.pages = paginas
        }
        NLibro.genre = prompt("Introduzca el genero del libro: ")
        console.log("Genero: "+ NLibro.genre+"\n\n")

        console.log("ID: "+NLibro.id+"\nTitulo: "+ NLibro.title+"\nAutor: "+NLibro.author+"\nPaginas: "+NLibro.pages+"\nGenero: "+NLibro.genre)
        libreria.libros.push(NLibro)
    } else if(opcion === "2"){
        const genero = prompt("Por favor, introduzca el genero: ")
        const GLibros1 = libreria.libros.filter(libro => libro.genre === genero);
        const GLibros2 = GLibros1.filter(libro => libro.title)
        libreria.libros.forEach((libro) => {
            if(libro.genre === genero){
                console.log("Título:", libro.title);
            }
        })
    } else if(opcion==="3"){
        let opcion = prompt("Por favor, introduzca el titulo del libro:")
        libreria.libros = libreria.libros.filter((libro) => libro.title !== opcion);
        console.log(libreria.libros);
    }else if(opcion !=="4"){
        console.log("He dicho 1, 2, 3 o 4\n"+opcion+" no es una de las opciones \nSigue las instrucciones")
    }
}