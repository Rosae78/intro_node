const fs = require ('fs')
const path = require ('path')

//Crear un directorio
// fs.mkdir('test', {},(err) => {
//     if(err) throw err
//     console.log( "Directorio creado correctamente ,,,,");
// })


// fs.mkdir(path.join(__dirname, "test" ), { recursive: false }, (err) => {

//     if (err) throw err;
//     console.log( "Directorio creado correctamente ,,,,");

// })

//Crear y escribir archivo

// fs.writeFile(
//     path.join(__dirname, "test", "hello.txt"),
//      "Hello World > Hola que ace",
// (err) => {
//     if (err) throw err;
//     console.log("Archivo ok!!!!");
// })

// fs.appendFile(path.join(__dirname, "test", "hello.txt"),
// " I love JS mucho",
// (err) => {
//     if (err) throw err;
//     console.log("Archivo actualizado OK!");
// });

//Leer un archivo
// fs.readFile(
//     path.join(__dirname, "test", "hello.txt"),
//     'utf-8',
//     (err, data) => {
//     if(err) throw err;
//     console.log(data, err)
// }
// )

//renombrar
// fs.rename(path.join(__dirname, "test", "hello.txt"),
// path.join(__dirname, "test", "renombrado.txt"),

// err => {
//     if(err) throw err
//     console.log('All ok!!');
// })

//copiar
// fs.copyFile(path.join(__dirname, "test", "renombrado.txt"),
// (__dirname, "test", "copiado.txt"),
// err => {
// if(err) throw err
// console.log('Copiado correctamente')
// }
//  )

//eliminar

// fs.rm(path.join(__dirname, "test", "copiado.txt"),
// err => {
//     if (err) throw err
//     console.log('Borrado correctamente')
// });

//mover

// fs.rename(path.join(__dirname, "test", "renombrado.txt"),
// path.join(__dirname, "test2", "renombrado.txt"),
// err => {
//     if(err) throw err;
//     console.log('Movido correctamente');
// });

const users =[
    {name: "Uno"},
    {name: "Dos"},
    {name: "Tres"},
    {name: "Cuatro"}
]
// //crear carpeta
//  fs.mkdir(path.join(__dirname, "users"),{},err =>{
//     if(err) throw err;
//    console.log('Dir ok!!');
//  })

//  //crear archivo
//  fs.writeFile(
//      path.join(__dirname, "users", "users.json"),
//     JSON.stringify(users),
//      err =>{
//     if(err) throw err;
//    console.log('File ok!!');

//    //leemos el json
//    fs.readFile(
//        path.join(__dirname, "users", "users.json"),
//        "utf8",
//        (err, data) => {
//            //mosttrar los datos 
//            console.log(data);
//        }
//    );
//     })
    fs.readdir(__dirname, (err,files)=> {
        if (err) throw err
        console.log(files);
    })