const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:Admin123@backenddb.dtbwfds.mongodb.net/INFX-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
