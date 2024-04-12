const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('./src/module/usuario/usuario.model')
const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
    if(!req.body.email) {
        return res.status(400).json({ message: 'O campo email é obrigatorio' });
    }
    if (!req.body.senha) {
        return res.status(400).json({ message: 'O campo senha é obrigatorio' });
    }

    const usuarioExistente = await usuarioModel.findOne({ email: req.body.email });

    const senhaVerificada = bcrypt.compareSync(
        req.body.senha,
        usuarioExistente.senha
        );

    if (!senhaVerificada) {
        return res.status(400).json({ message: 'E-mail ou senha incorretos'});
    }

    const token = jwt.sign({ _id: usuarioExistente._id }, 'dudu');
    console.log(token)

    return res.status(200).json({ message: 'Login realizado com sucesso'});

   
   

});

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioModel.find({})
    return res.status(200).json(usuarios); 
      
});

app.post('/usuarios', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ message: 'O campo email é obrigatorio'})
    }
    if (!req.body.senha) {
        return res.status(400).json({ message: 'O campo senha é obrigatorio'})
    }

    const usuarioExistente = await usuarioModel.find({ email: req.body.email });

    if (usuarioExistente.length) {
        return res.status(400).json({ message: 'Usuario ja existe' })
    }

    const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10);

    const usuario = await usuarioModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada,
    })
    return res.status(201).json(usuario);
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