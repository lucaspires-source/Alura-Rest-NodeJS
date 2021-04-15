const fs = require('fs')
const path = require('path')
module.exports =(caminho, nomeDoArquivo,callbackImagemCriada)=>{
    const tiposValidos = ['jpg','jpeg','png']
    const tipo = path.extname(caminho)
    const tipoValido =  tiposValidos.indexOf(tipo.substring(1))
    if (tipoValido === -1){
        console.log('Erro Tipo inválido')
    }else{
        const novoCaminho = `./assets/images/${nomeDoArquivo}${tipo}`
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(novoCaminho))  
    }
    

}
