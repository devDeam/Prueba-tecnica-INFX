const Item = require("../models/item.model.js"); // Importar el modelo para creación de Items

// Crear un nuevo item en la base de datos por API con el modelo Item
const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para buscar un item por nombre, marca o categoria
const searchItem = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res
        .status(400)
        .json({ message: "Falta el parámetro de búsqueda 'q'" });
    }

    const regex = new RegExp(q, "i"); // 'i' para que no distinga mayúsculas/minúsculas

    const items = await Item.find({
      $or: [{ name: regex }, { brand: regex }, { category: regex }],
    });

    if (items.length === 0) {
      return res.status(404).json({ message: "No se encontraron resultados" });
    }

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener un item en específico por su ID
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getItemById,
  searchItem,
};
