/**
 * Controladores para manejar las rutas relacionadas con las colecciones de la base de datos
 *
 * Este archivo define las funciones necesarias para realizar operaciones
 * CRUD (Crear, Leer, Actualizar, Eliminar) en las diferentes colecciones de MongoDB
 *
 */

// Importación de los modelos
const {Testimonials, BasicSteps, SpecificSteps, Meals, Users, CreatedMeals}= require('../models/models')


/**
 * Función para obtener todos los testimonios desde la base de datos
 * 
 * @model Testimonials 
*/
const getTestimonials = async (req, res, next) =>{
    try{
        const testimonials = await Testimonials.find()
        res.json(testimonials)
    } catch(error){
        next({statusText: 'Error al buscar testimonios'})
    }

}


/**
 * Función para obtener todos los pasos básico desde la base de datos
 * 
 * @model BasicSteps 
*/
const getBasicSteps = async (req, res, next) =>{
    try{
        const basicsteps = await BasicSteps.find()
        res.json(basicsteps)
    } catch(error){
        next({statusText: 'Error al buscar pasos básicos'})
    }
}

/**
 * Función para obtener todos los pasos específicos desde la base de datos
 * 
 * @model SpecificSteps 
*/
const getSpecificsSteps = async (req, res, next)=>{
    try{
        const specificsteps = await SpecificSteps.find()
        res.json(specificsteps)
    } catch(err){
        next({statusText: 'Error al buscar pasos específicos'})
    }}

/**
 * Función para obtener todos los platos desde la base de datos
 * 
 * @model Meals
*/
const getMeals = async (req, res, next)=>{
    try{
        const meals = await Meals.find()
        res.json(meals)
    } catch(err){
        next({statusText: 'Error al buscar platos de comida'})
    }
}

/**
 * Función para manejar el inicio de sesión de los usuarios
 * 
 * @model Users
 * @property {String} email - email del usuario
 * @property {String} password - contraseña del usuario
*/
const postUsers = async(req, res, next)=>{
    const {email, password} = req.body

    try{
        const findOut = await Users.findOne({email})
        if(!findOut){
            return res.status(404).json({success: false, message: "Usuario no encontrado"})
        }

        if(password !== findOut.password){
            return res.status(404).json({success: false, message: "Usuario no encontrado"})
        }

        res.json({success: true, user:findOut.user, message: 'Usuario correcto', Users})
        console.log(findOut.name)
        
    } catch(error){
        next({statusText: 'Error al hacer Login'})
    }
}

/**
 * Función para obtener todos los platos creados por el usuario desde la base de datos
 * 
 * @model CreatedMeals
*/

const getCreatedMeals = async(req,res,next)=>{
    try {
        console.log('Intentando recuperar datos de la colección user-meals...');
        const userMeals = await mongoose.connection.db.collection('user-meals').find().toArray();
        console.log('Datos recuperados:', userMeals);
        res.json(userMeals);
    } catch (err) {
        console.error('Error en la ruta /user-meals:', err);
        res.status(500).json({ error: 'Error interno del servidor', detalle: err.message });
    }
}

/**
 * Función para crear un nuevo plato en la base de datos
 * 
 * @model CreatedMeals
 * @property {Number} amount - cantidad de platos del mismo
 * @property {String} name - nombre del plato
 * @property {String} ingredients - ingredientes del plato
*/
const postCreatedMeals = async(req,res,next)=>{
    const {amount, name, ingredients}= req.body
    
    try{
        const anadir = new CreatedMeals({amount, name, ingredients})
        await anadir.save()
        
        const buscar = await CreatedMeals.find()
    
        res.json(buscar)
    }catch(err){
        next({statusText: 'Error al buscar platos de comida'})
    }
}

/**
 * Función para actualizar un plato creado por el usuario en la base de datos
 * 
 * @model CreatedMeals
 * @property {String} id - ID del plato 
*/

const putCreatedMeals = async(req,res,next)=>{
    try{
        const updateMeal = await CreatedMeals.findByIdAndUpdate(req.params.id, req.body)
        await updateMeal.save()
        
        const buscar = await CreatedMeals.find()
        res.json(buscar)

    }catch(err){
        next({statusText: 'Error al buscar platos de comida'})
    }
}

/**
 * Función para eliminar el plato creado por el usuario en la base de datos
 * 
 * @model CreatedMeals
 * @property {String} id - ID del plato 
*/

const deleteCreatedMeals = async(req,res,next)=>{
    try{
        const id = req.params.id

        await CreatedMeals.findByIdAndDelete(id)

        const updatedMeals = await CreatedMeals.find()
        res.json(updatedMeals)

    }catch(err){
        next({statusText: 'Error al buscar platos de comida'})
    }

    
}

        


module.exports ={
    getTestimonials,
    postUsers,
    getBasicSteps,
    getSpecificsSteps,
    getMeals,
    getCreatedMeals,
    postCreatedMeals,
    putCreatedMeals,
    deleteCreatedMeals
}