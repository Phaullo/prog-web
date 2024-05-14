const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');
const controladorSupermercado = require('../controllers/controladorSupermercado');

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produtos', controladorProduto.obterProdutos);
router.get('/produto', controladorProduto.obterProduto);
router.put('/produto', controladorProduto.editarProduto);

router.post('/supermercados', controladorSupermercado.criarSupermercado);
router.get('/supermercados', controladorSupermercado.obterSupermercados);
router.get('/supermercados/:supermercadoId', controladorSupermercado.obterSupermercado);
router.get('/supermercados/:supermercadoId/produtos', controladorSupermercado.obterProdutosSupermercados);


module.exports = router;
