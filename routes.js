const express = require('express');
const router = express.Router();
const Item = require('./models/item');

// Ruta para crear un nuevo item
router.post('/items', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
});

// Ruta para obtener todos los items
router.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

module.exports = router;
