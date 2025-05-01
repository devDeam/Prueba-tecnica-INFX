const mongoose = require('mongoose')

// Conexión a la base de datos MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) // URL almacenada en el archivo .env
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Finalizar proceso si no se conecta a la DB
    }
}

module.exports = connectDB;