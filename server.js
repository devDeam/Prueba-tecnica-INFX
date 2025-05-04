require("dotenv").config();
const express = require("express");
const itemRoutes = require("./routes/item.routes.js");
const connectDB = require("./config/db.js");
const cors = require("cors");

const app = express();

// Configuración de CORS
app.use(cors());
// Middleware para manejar el cuerpo de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", itemRoutes);

app.get("/", (req, res) => {
  res.send("BIENVENIDO A LA API DE INFX");
});

// Puerto dinamico
const PORT = process.env.PORT || 3000;
// Conexión a la base de datos y arranque del servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
