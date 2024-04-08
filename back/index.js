const express = require('express');
const app = express();
app.use(express.json());

app.get('/usuarios', (req, res) => {
    return res.status(200).json([]);
});

app.post('/usuarios', (req, res) => {
    return res.status(201).json([]);
});

app.get('/noticias', (req, res) => {
    return res.status(200).json([]);
});

app.post('/noticias', (req, res) => {
    return res.status(201).json([]);
});

app.listen(8080, () => {
    console.log('Servidor funcionando na porta 8080');
});