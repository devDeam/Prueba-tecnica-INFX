/**
 * Modelo de "Item" para la base de datos MongoDB usando Mongoose.
 * Este modelo define la estructura y los requisitos de los datos que se almacenarán en la colección "Items".
 *
 * @module Item
 */

const mongoose = require("mongoose");

// Definición del esquema para el modelo de Item
const ItemSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: [true],
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    imageUrl: {
      type: [String],
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: [Number],
      required: false,
      default: [],
    },
  },
  {
    /**
     * Activación de los timestamps (createdAt, updatedAt) automáticamente
     * @type {Boolean}
     */
    timestamps: true,
  }
);

/**
 * El modelo "Item" representa un producto en la base de datos.
 * Este modelo proporciona acceso a las operaciones CRUD (crear, leer, actualizar, eliminar) sobre la colección "items".
 */
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item; // Se exporta el modelo para poder usarlo en otros archivos.