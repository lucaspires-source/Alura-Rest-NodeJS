const fs = require("fs");
const path = require("path");
module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tiposValidos = ["jpg", "jpeg", "png"];
  const tipo = path.extname(caminho);
  const tipoValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;
  if (tipoValido) {
    const novoCaminho = `./assets/images/${nomeDoArquivo}${tipo}`;
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => callbackImagemCriada(false, novoCaminho));
  } else {

      const erro = "Tipo inválido";
      callbackImagemCriada(erro);
  }
};
