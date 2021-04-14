const fs = require('fs')

fs.readFile('./assets/gatusso.jpg',((erro,buffer) =>{
    console.log('imagem foi buferizada')
    fs.writeFile('./assets/gattuso2.jpg',buffer,(erro) =>{
    console.log('Imagem foi escrita')
    })
}))