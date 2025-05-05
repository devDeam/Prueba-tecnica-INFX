/**
 * Configuración y arranque del servidor de la API.
 * Este archivo configura el servidor Express, establece la conexión con la base de datos,
 * maneja las rutas de la API, y arranca el servidor en el puerto configurado.
 */

require("dotenv").config();  // Para poder leer variables de entorno desde el .env
const express = require("express");
const itemRoutes = require("./routes/item.routes.js");
const connectDB = require("./config/db.js");
const cors = require("cors");

const app = express();

app.use(cors());  // Habilita solicitudes HTTP desde diferentes dominios.
app.use(express.json());  // Permite procesar las solicitudes entrantes en formato JSON y URL codificado.
app.use(express.urlencoded({ extended: true })); // Permite que la aplicación maneje datos codificados en URL

app.use("/api", itemRoutes); // Rutas para los items con el prefijo api

app.get("/", (req, res) => {
  res.send("BIENVENIDO A LA API DE INFX");
});

// Se exporta solo 'app' para que sea usada en los tests sin iniciar el servidor
module.exports = { app };
