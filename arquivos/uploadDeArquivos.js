const fs = require('fs')

fs.createReadStream('./assets/gatusso.jpg')
    .pipe(fs.createWriteStream('./assets/gatusso-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
