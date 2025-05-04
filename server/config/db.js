/**
 * Conexión a la base de datos MongoDB utilizando Mongoose.
 *
 * Esta función establece una conexión con la base de datos MongoDB usando la URL de conexión almacenada en las variables de entorno 
 * en el archivo .env
 * Si la conexión es exitosa, se muestra un mensaje en la consola. Si ocurre un error,
 * el proceso se termina con un código de salida 1.
 *
 * @returns {Promise<void>} Promesa que maneja la conexión a la base de datos.
 */

const mongoose = require('mongoose')

// Conexión a la base de datos MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) // Intenta conectar a MongoDB usando la URL de conexión almacenada en las variables de entorno
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Finalizar proceso si no se conecta a la DB
    }
}

module.exports = connectDB;