const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('conexão feita a database')
        const app = customExpress()
        app.listen(3000,() =>{
            console.log('Servidor rodando')
        })
    }
})



