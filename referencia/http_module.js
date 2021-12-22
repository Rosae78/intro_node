const http =  require('http')
const fs = require ('fs')

//Crear un servidor
http.createServer((req, res) => {
    //Escribir una respuesta al recibir una petición
    // res.write('Hello world from Nodejs http module')
    // res.end()

    //creamos el stream de lectura

    const myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8')
    res.writeHead(200,{'content-Type': 'text/plain'})
    // res.write('<h1>Hello world forn Nodejs http module')
    // res.end()

    //Respuesta en el stream de la respodne
    myReadStream.pipe(res
        )

}).listen(5000, () => console.log('servidor arrancado'))

