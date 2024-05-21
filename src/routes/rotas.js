const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');
const controladorPedido = require('../controllers/controladorPedido');

router.post('/produto', controladorProduto.criarProduto);
router.get('/produto', controladorProduto.obterProduto);
router.put('/produto', controladorProduto.editarProduto);
router.delete('/produto', controladorProduto.apagarProduto);

router.post('/pedido', controladorPedido.criarPedido);

module.exports = router;
