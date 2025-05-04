/**
 * Rutas relacionadas con los items en la API.
 *
 * Estas rutas manejan las operaciones CRUD (Crear, Leer) para los productos en la base de datos.
 * Además, incluyen la funcionalidad para agregar calificaciones a los productos.
 *
 */

const express = require("express"); // importa express para poder manejar rutas
const router = express.Router(); // Crear un enrutador de Express
const {
  createItem,
  getItemById,
  searchItem,
  postRating,
} = require("../controllers/item.controller.js");

// Se buscan Items por el parametro de consulta 'q'
router.get("/items", searchItem);

//Se crea un nuevo Item en la DB
router.post("/create", createItem);

// Se muestra un item en especifico buscado en la base de datos por su id
router.get("/items/:id", getItemById);

// Se agrega la calificacion a un producto por su id
router.post("/items/:id/rating", postRating);

module.exports = router;
