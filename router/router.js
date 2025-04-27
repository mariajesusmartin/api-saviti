/**
 * Ruta principal de la API (router.js)
 * Esta ruta maneja las solicitudes a la raíz de la API
 * 
 * @routing {Express Router}
 * @route {GET} / Nos muestra una lista de todos los datos
 * @route {POST} / Añade los datos y recibe por body
 * @route {PUT} / Actualiza los datos y recibe por body
 * @route {DELETE} / Elimina un dato
 * @endpoint {/testimonials} [get]
 * @endpoint {/basicsteps} [get]
 * @endpoint {/specificsteps} [get]
 * @endpoint {/meals} [get]
 * @endpoint {/user-meals} [get, post]
 * @endpoint {/user-meals/:id} [put, delete]
 * @endpoint {/login} [post]
 */

// Importación de express y router
const express = require('express')
const router = express.Router()

// Importación de los controllers
const {getTestimonials, postUsers, getBasicSteps, getSpecificsSteps, getMeals, getCreatedMeals, postCreatedMeals, putCreatedMeals, deleteCreatedMeals} = require('../controllers/controllers')

    // Ruta '/testimonials'
    router.route('/')
        .get(getTestimonials)

    router.route('/testimonials')
        .get(getTestimonials)

    // Ruta '/basicsteps'
    router.route('/basicsteps')
        .get(getBasicSteps)

    // Ruta '/specificsteps'
    router.route('/specificsteps')
        .get(getSpecificsSteps)

    // Ruta '/meals'    
    router.route('/meals')
        .get(getMeals)

    // Ruta '/user-meals'
    router.route('/user-meals')
        .get(getCreatedMeals)
        .post(postCreatedMeals)

    // Ruta '/user-meals/:id'
    router.route('/user-meals/:id')
        .put(putCreatedMeals)
        .delete(deleteCreatedMeals)

    // Ruta '/login'
    router.route('/login')
        .post(postUsers)

    // Ruta para configurar el error 404
    router.all('*', (req,res,next)=>{
        const err = new Error()
            err.status = 404
            err.statusText = `No encuentro el Endpoint`
        next(err)
    })

    // Ruta para configurar el error 500
    router.use((err,req,res,next)=>{
        let {status,statusText} = err   
            status = status || 500
            statusText = statusText || `Error interno en la API`
        res.json({status,statusText})
    })


module.exports ={
    router
}