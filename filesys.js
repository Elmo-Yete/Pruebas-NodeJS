const fs = require("fs")

// ------- PARA LEER ARCHIVOS -------
// fs.readFile("./hola.txt","utf8",(error,data)=>{
// if(error) {
//     console.log(error);
//     return;
// } 
// console.log("La data es:",data);
// })

// ------- PARA ESCRIBIR ARCHIVOS ----

fs.writeFile("test1","Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500","utf8",(error)=>{
    if (error) {
        console.log("no pos no jalo")
    }
})