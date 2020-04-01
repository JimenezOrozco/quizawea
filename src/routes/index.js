const express = require('express');

const router = express.Router();
//este archivo sirve para agregar las rutas necesarias
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/acceso', (req, res) => {
    res.render('acceso');
});
router.get('/registro', (req, res) => {
    res.render('registro');
});

module.exports = router;