const fs = require('fs')

// console.log(fs.readFileSync(__dirname + '/data.txt'))
// console.log("Leído .......");

const myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8')
const myWriteStream = fs.createWriteStream(__dirname + '/data2.txt', 'utf-8')

// myReadStream.on('data',(chunk) => {
//     console.log('Nuevos datos recibidos');
//    // console.log(chunk)
// myWriteStream.write(chunk)
// })

myReadStream.pipe(myWriteStream);
