require("dotenv").config();
const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("../routes/item.routes");
const Item = require("../models/item.model");

/**
 * Archivo de pruebas para las rutas de "Item" en la API.
 * Este archivo contiene pruebas unitarias para las rutas relacionadas con los ítems de la aplicación utilizando Jest y Supertest.
 * Las pruebas incluyen la creación de un nuevo ítem y la validación de errores cuando faltan campos obligatorios.
 */

const app = express();
app.use(express.json());
app.use("/api", itemRoutes);


let testItemId;

/**
 * Configuración inicial para la base de datos antes de todas las pruebas.
 * Se conecta a la base de datos de MongoDB utilizando la URI proporcionada en el archivo .env.
 */
beforeAll(async () => {
  jest.setTimeout(10000); // Aumenta el tiempo de espera a 10 segundos
  await mongoose.connect(process.env.MONGODB_URI);
}, 10000);

/**
 * Limpieza después de cada prueba.
 * Si se ha creado un ítem de prueba, se elimina de la base de datos usando su _id.
 *
 */
afterEach(async () => {
  if (testItemId) {
    await Item.findByIdAndDelete(testItemId); // Elimina el ítem de prueba usando su _id
  }
}, 10000);

/**
 * Cierre de la conexión con la base de datos después de todas las pruebas.
 */
afterAll(async () => {
  await mongoose.connection.close();
}, 10000);

/**
 * Grupo de pruebas para la ruta POST "/api/create".
 * Esta ruta se utiliza para crear un nuevo ítem en la base de datos.

 */
describe("POST /api/create", () => {
  it("debe crear un nuevo item", async () => {
    const newItem = {
      brand: "TestBrand",
      name: "TestItem",
      stock: 10,
      description: "Un item de prueba",
      price: 100,
      imageUrl: ["https://img.com/foto.jpg"],
      category: "Pruebas",
    };

    const res = await request(app).post("/api/create").send(newItem); // Se guarda el json que responde la API

    testItemId = res.body._id; // Guardar el _id del ítem creado

    expect(res.statusCode).toBe(201);  // Resultado esperado del status
    expect(res.body).toHaveProperty("_id");  // Valida si se crea automaticamente el ID del item enviado
    expect(res.body.name).toBe("TestItem");  // Valida si se creó un item con ese nombre
  });

/**
   * Prueba para la creación de un ítem con campos faltantes.
   * Verifica que la respuesta devuelva un código de estado 500 (o 400 si se implementa validación explícita).
   */
  it("debe fallar si falta un campo obligatorio", async () => {
    const incompleteItem = {
      brand: "TestBrand",
      price: 100,
    };

    const res = await request(app).post("/api/create").send(incompleteItem);

    expect(res.statusCode).toBe(500); // Valida que la API responda con status 500
    expect(res.body).toHaveProperty("message");
  });
});
