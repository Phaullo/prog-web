const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');

router.post('/produto', controladorProduto.criarProduto);
router.get('/produto', controladorProduto.obterProduto);
router.put('/produto', controladorProduto.editarProduto);
router.delete('/produto', controladorProduto.apagarProduto);

module.exports = router;
