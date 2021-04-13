const express = require('express')

const app = express()


app.listen(3000,() =>{
    console.log('Servidor rodando')
})

app.get('/',(req,res) => res.send('servidor rodando,tudo ok'))

app.get('/atendimentos',(req,res) => res.send('Você está na rota de atendimentos'))