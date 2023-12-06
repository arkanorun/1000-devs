const express = require('express')
const server = express()
const rotas = require('./src/rotas')

server.use(rotas)


const PORT = 3000
server.listen(PORT, () => {
    console.log(`aplicação ouvindo na porta ${PORT}`)
})