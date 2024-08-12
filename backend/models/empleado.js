/** 
 * Requrmimos mongoose, lo utilizaremos para definir los esquemas de datos no para la conexion
 * y empiezo a modelar los datos de los empleados, como nombre, cargo u otra cosas
 * mogoose le dice a mongodb como va a lucir la estrucura de empleados
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    name: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);// Como voy a utilizar este archivo en otras partes de la aplicacion