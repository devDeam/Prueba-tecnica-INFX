const express = require("express");
const router = express.Router();
const {
  createItem,
  getItemById,
  searchItem,
  postRating,
} = require("../controllers/item.controller.js");

// Se busca item por parametro ?query
router.get("/items", searchItem);

//Se crea un nuevo Item en la DB
router.post("/create", createItem);

// Se muestra un item en especifico buscado en la base de datos por su id
router.get("/items/:id", getItemById);

// Se agrega la calificacion a un producto por su id
router.post("/items/:id/rating", postRating);

module.exports = router;
