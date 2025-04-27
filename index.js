/*___________________
 * Express API
 * Conectamos con la base de datos saviti para devolver la información 
 * 
 * @middlewares {cors, nodemon}
 * 
 *____________________*/

console.clear()
console.log('Iniciando JS')

// Importación de express
const express = require ('express')

// Variable de entorno
const PORT = process.env.PORT || 3000

// Importación de cors
const cors = require('cors')

// Importación del archivo router
const { router } = require('./router/router')

// Configuración del servidor
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded ({extended: false}))
app.use(router)

// Inicio del servidor
app.listen (PORT,()=>console.log('Iniciando API'))