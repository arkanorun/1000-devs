const { Router } = require('express')
const calculaIdade = require('./controlador/user-controler')
rotas = Router()

rotas.get('/user', calculaIdade)


module.exports = rotas