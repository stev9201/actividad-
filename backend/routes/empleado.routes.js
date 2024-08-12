/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para enviar y recibir datros en formato json
 */

const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');
//const empleoCtrl = require('../controllers/empleado.controller'); //aqui empleoCtrl contiene todas las funciones 
                                                                    //que se le pueden hacer a los empleados (crud)

/*router.get('/', (req, res) => { // generaos un ejemplo, cuando le solicten algo al servidor por el metodo GET
    //res.send('respuesta del servidor'); Ejemplo de funcioamiento del servidor
    res.json({
        status: 'API REST funcionando'
    });
})*/

router.get('/', empleadoCtrl.getEmpleados); // Aqui tenemos una ruta más limpia de entender gracias al controlador. obtiene todos los empleados
router.post('/', empleadoCtrl.createEmpleados);//guardar
router.get('/:id', empleadoCtrl.getUnicoEmpleado);// obtiene unn unico empleado
router.put('/:id',empleadoCtrl.editarEmpleado);   //Acctualizar datos (uno a la vez)
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;