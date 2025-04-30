const express = require('express');
const router = express.Router();
const {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem,
 } = require('../controllers/item.controller.js');

// Se muestran todos los items
router.get('/items', getAllItems);

//Se crea un nuevo Item en la DB
router.post('/items/create', createItem);

// Se muestra un item en especifico buscado en la base de datos por su id
router.get('/items/:id', getItemById);

// Se actualiza un item en la base de datos por su id
router.put('/update/:id', updateItem)

// Se elimina un item en la base de datos por su id
router.delete('/delete/:id', deleteItem)



module.exports = router;