const mongoose = require("mongoose");

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
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;