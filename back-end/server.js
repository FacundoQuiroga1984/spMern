const express = require('express');

const env = require('dotenv').config();

const app = express();

let visitas = 0;

app.get('/', (req, res) => {
    res.send('prueba get')
})

app.get('/visitas', (req, res) => {
    visitas++
    res.send(`la cantidad de visitas al sitio es: ${visitas}`)
})

const connectedServer = app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado y escuchando el puerto: ${process.env.PORT}`);
})
connectedServer.on('error',(error) =>{
    console.log(error.message);
})