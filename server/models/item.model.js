const mongoose = require("mongoose");

// Definición del esquema para el modelo de Item
const ItemSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Ingrese la marca del producto"],
    },
    name: {
      type: String,
      required: [true, "Ingrese el nombre del producto"],
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
      type: String,
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
    timestamps: true,
  }
);

// Se crea el modelo Item a partir del esquema definido
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;