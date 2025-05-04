/**
 * Controlador para manejar la creación, búsqueda, detalle y calificación de productos (items).
 */

const Item = require("../models/item.model.js"); // Importa el modelo de "Item" para interactuar con la base de datos


const createItem = async (req, res) => {
  /**
   * Crea un nuevo producto en la base de datos.
   *
   * @param {Object} req - El objeto de la solicitud que contiene los datos del producto a crear enviados por el usuario por form o API.
   * @param {Object} res - El objeto de la respuesta que se enviará al usuario con el resultado de la creación.
   *
   * @returns {Object} - Respuesta con el producto creado y un código de estado HTTP 201 si tiene éxito.
   */
  try {
    const item = await Item.create(req.body); // Crea un nuevo item utilizando los datos enviados en el cuerpo de la solicitud (req.body)
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const searchItem = async (req, res) => {
  /**
   * Busca productos por nombre, marca o categoría.
   *
   * @param {Object} req - El objeto de la solicitud que contiene el parámetro de búsqueda "q".
   * @param {Object} res - El objeto de la respuesta que se enviará al cliente con los resultados de la búsqueda.
   *
   * @returns {Array} - Respuesta con los productos encontrados o un mensaje de error si no se encuentran resultados.
   */
  try {
    const { q } = req.query; // Obtiene el valor del parámetro de búsqueda "q" de la URL.
    if (!q) {
      return res.status(400).json({ message: "Falta el parámetro de búsqueda 'q'" });
    }

    const regex = new RegExp(q, "i"); // Crea una expresión regular para hacer la búsqueda insensible a mayúsculas y minúsculas

    const items = await Item.find({
      // Realiza una búsqueda en la base de datos buscando en los campos 'name', 'brand' y 'category'
      $or: [{ name: regex }, { brand: regex }, { category: regex }],
    });

    if (items.length === 0) {
      return res.status(404).json({ message: "No se encontraron resultados" });
    }
    res.status(200).json(items); // Se responde con los productos encontrados
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  /**
   * Obtiene un producto o item específico por su ID.
   *
   * @param {Object} req - El objeto de la solicitud que contiene el parámetro 'id' del producto a obtener.
   * @param {Object} res - El objeto de la respuesta que se enviará al cliente con los detalles del producto.
   *
   * @returns {Object} - Respuesta con el producto encontrado o un mensaje de error si no se encuentra.
   * @throws {Error} - Si ocurre un error, se responde con un código 500 y el mensaje de error.
   */
  try {
    const { id } = req.params; // se obtiene el ID del producto desde los parámetros de la URl de la petición
    const item = await Item.findById(id); // busca el producto en la base de datos por su ID y lo guarda en item
    if (!item) {
      return res.status(404).json({message: "Producto no encontrado"})
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postRating = async (req, res) => {
  /**
   * Con este endpoint se agrega una calificación para un producto especifico
   *
   * @param {Object} req - El objeto de la solicitud que contiene el parámetro 'id' del producto y la calificación en el cuerpo.
   * @param {Object} res - El objeto de la respuesta que se enviará al cliente con el resultado de la calificación.
   *
   * @returns {Object} - Respuesta con un mensaje de éxito o error dependiendo del resultado de la calificación.
   */
  try {
    const { id } = req.params; // Se obtiene el ID del producto desde los parametros de la URL en la petición http
    const { rating } = req.body; // Se obtiene la calificación enviada en el cuerpo de la solicitud.

    if( typeof rating !== "number" || rating < 0 || rating > 5){
      // se valida que la calificación se un número ente 0 y 5, si no envía mensaje de error y estatos 400
      return res.status(400).json({message: "La calificacion debe estar entre 0 y 5"});
    }
    const item = await Item.findById(id); // Busca el producto en la DB por su ID
    if (!item){
      return res.status(400).json({message:"No se encontró el producto"});
    }

    if (!Array.isArray(item.rating)) {
       // Validar que el campo rating del modelo sea un array sino lo crea como uno vacio
      item.rating = []
    }

    item.rating.push(rating); // Agrega la calificación al arreglo 'rating' del producto en la DB
    await item.save(); // Guarda los cambios en la DB

    res.status(200).json({message: "Calificacion enviada con exito!", item});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  createItem,
  getItemById,
  searchItem,
  postRating,
};
