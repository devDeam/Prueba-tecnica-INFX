const Item = require('../models/item.model.js')

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchItem = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({ message: "Falta el parámetro de búsqueda 'q'" });
        }

        const regex = new RegExp(q, 'i'); // 'i' para que no distinga mayúsculas/minúsculas

        const items = await Item.find({
            $or: [
                { name: regex },
                { brand: regex },
                { category: regex }
            ]
        });

        if (items.length === 0) {
            return res.status(404).json({ message: "No se encontraron resultados" });
        }

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItemById = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateItem = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);
        if (!item) {
            return res.status(404).json({message: 'Producto no encontrado'}); 
        }
        const updateProduct = await Item.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({message: 'Producto no encontrado'}); 
        }
        res.status(200).json({message: 'Producto eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem,
    searchItem,
}
