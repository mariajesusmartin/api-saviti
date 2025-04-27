/*_________________________*\
 * models.js

 * Definición de los modelos de Mongoose para interactuar con las colecciones de la base de datos de MongoDB
 * 
 *______________________________*/

// Importación de los esquemas
const {testimonialsSchema,basicstepsSchema,specificstepsSchema,mealsSchema,usersSchema, createdMealsSchema} = require('../schemas/schemas')
// Importación de mongoose
const mongoose = require('mongoose')

/**
 * Modelo Testimonials.
 * Representa la colección "testimonials" en la base de datos.
 * 
 * @model Testimonials
 * @schema testimonialsSchema
 */
const Testimonials = mongoose.model('testimonials', testimonialsSchema)


/**
 * Modelo BasicSteps.
 * Representa la colección "basicsteps" en la base de datos.
 * 
 * @model BasicSteps
 * @schema basicstepsSchema
 */
const BasicSteps = mongoose.model('basicsteps', basicstepsSchema)

/**
 * Modelo SpecificSteps.
 * Representa la colección "specificsteps" en la base de datos.
 * 
 * @model SpecificSteps
 * @schema specificstepsSchema
 */
const SpecificSteps = mongoose.model('specificsteps', specificstepsSchema)

/**
 * Modelo Meals.
 * Representa la colección "meals" en la base de datos.
 * 
 * @model Meals
 * @schema mealsSchema
 */
const Meals = mongoose.model('meals', mealsSchema)

/**
 * Modelo Users.
 * Representa la colección "users" en la base de datos.
 * 
 * @model Users
 * @schema usersSchema
 */
const Users = mongoose.model('users', usersSchema)

/**
 * Modelo CreatedMeals.
 * Representa la colección "createdmeals" en la base de datos.
 * 
 * @model CreatedMeals
 * @schema createdMealsSchema
 */
const CreatedMeals = mongoose.model('usermeals', createdMealsSchema)

module.exports={
    Testimonials,
    BasicSteps,
    SpecificSteps,
    Meals,
    Users,
    CreatedMeals,
}