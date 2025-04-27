/*_________________________*\
 * schemas.js

 * Configuración de la conexión con la base de datos y definición de los esquemas para cada colección utilizada en la aplicación
 * 
 * @odm {mongoose}
 *______________________________*/

// Importación de mongoose
const mongoose = require('mongoose')

require('dotenv').config()


// Función para conectar con las diferentes colecciones de la base de datos de MongoDB
const conectar =()=>mongoose.connect(process.env.BBDD_MONGO)
                    .then(()=>console.log('Conectando con MongoDB'))
                    .catch(err=>console.log(err))
// Ejecución de la función
conectar()

/** Esquema de testimonios del usuario
 * 
 * Esquema que establece la estructura de los datos de la colección "testimonials"
 * 
 * @property {String} customer - nombre del usuario
 * @property {String} note - nota del 1 al 5
 * @property {String} stars - nota en estrellas a través de imagenes
 * @property {String} testimony - testimonio del usuario
 * @property {String} city - ciudad del usuario
 */ 
const testimonialsSchema = new mongoose.Schema(
    {customer: String, note: String, stars: String, testimony: String, city: String},
    {collection: 'testimonials', versionKey: false}
)

/** Esquema de pasos básicos para el proceso de pedido
 * 
 * Esquema que establece la estructura de los datos de la colección "basicsteps"
 * 
 * @property {Number} step - número de paso
 * @property {String} icon - imagen que representa al paso
 * @property {String} title - título del paso
 * @property {String} info - descripción del paso
 */ 
const basicstepsSchema = new mongoose.Schema(
    {step: Number, icon:String, title: String, info: String},
    {collection: 'basicsteps', versionKey: false}
)

/** Esquema de pasos específicos para el proceso de pedido
 * 
 * Esquema que establece la estructura de los datos de la colección "specificssteps"
 * 
 * @property {Number} step - número de paso
 * @property {String} icon - imagen que representa al paso
 * @property {String} title - título del paso
 * @property {String} info - descripción del paso
 */ 
const specificstepsSchema = new mongoose.Schema(
    {step: Number, icon:String, title: String, info: String},
    {collection:'specificsteps', versionKey: false}
)

/** Esquema de los platos de comida
 * 
 * Esquema que establece la estructura de los datos de la colección "meals"
 * 
 * @property {Number} id - ID del plato
 * @property {Number} amount - cantidad inicial del plato
 * @property {String} image - imagen del plato
 * @property {Number} price - precio del plato
 * @property {String} name - nombre del plato
 * @property {String} ingredients - ingredientes del plato
 * @property {Array} allergens - listado de alergenos con sus iconos correspondientes
 */ 
const mealsSchema = new mongoose.Schema(
    {id: Number, amount: Number, image: String, price: Number, name: String, ingredients: String, allergens:[{id: Number,icon: String}]},
    {collection:'meals', versionKey: false}
)

/** Esquema de los usuarios
 * 
 * Esquema que establece la estructura de los datos de la colección "users"
 * 
 * @property {String} user - nombr de usuario
 * @property {String} email - email del usuario
 * @property {String} password - contraseña del usuario
 */
const usersSchema = new mongoose.Schema(
    {user: String, email: String, password: String },
    {collection: 'users', versionKey: false}
)

/** Esquema de los platos creados por el usuario
 * 
 * Esquema que establece la estructura de los datos de la colección "createdmeals"
 * 
 * @property {Number} amount - cantidad de platos del mismo
 * @property {String} name - nombre del plato
 * @property {String} ingredients - ingredientes del plato
 */
const createdMealsSchema = new mongoose.Schema(
    {amount: Number, name: String, ingredients: String},
    {collection: 'createdmeals', versionKey: false}
)



module.exports ={
   testimonialsSchema,
   basicstepsSchema,
   specificstepsSchema,
   mealsSchema,
   usersSchema,
   createdMealsSchema,
   conectar
}