const express = require('express');
const router = express.Router();
const {
    createItem,
    getItemById,
    searchItem,
 } = require('../controllers/item.controller.js');


router.get('/items', searchItem)

//Se crea un nuevo Item en la DB
router.post('/create', createItem);

// Se muestra un item en especifico buscado en la base de datos por su id
router.get('/items/:id', getItemById);



module.exports = router;