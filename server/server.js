const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/item.routes.js')

const app = express()
// Middleware para manejar el cuerpo de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', itemRoutes)

app.get('/', (req, res) => {
    res.send('BIENVENIDO A LA API DE INFX');
}
);



// Conexión a la base de datos y arranque del servidor
mongoose.connect('mongodb+srv://Admin:Admin123@backenddb.dtbwfds.mongodb.net/INFX-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('MongoDB connected');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
