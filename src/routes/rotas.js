const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');
const controladorSupermercado = require('../controllers/controladorSupermercado');

router.post('/produto', controladorProduto.criarProduto);
router.get('/produto', controladorProduto.obterProduto);
router.put('/produto', controladorProduto.editarProduto);
router.delete('/produto', controladorProduto.apagarProduto);
router.get('/produtos', controladorProduto.obterProdutos);

router.post('/supermercado', controladorSupermercado.criarSupermercado);
router.get('/supermercado', controladorSupermercado.obterSupermercado);
router.put('/supermercado', controladorSupermercado.editarSupermercado);
router.delete('/supermercado', controladorSupermercado.apagarSupermercado);

router.get('/supermercados', controladorSupermercado.obterSupermercados);
router.get('/supermercados/:supermercadoId', controladorSupermercado.obterSupermercado);
router.get('/supermercados/:supermercadoId/produtos', controladorSupermercado.obterProdutosSupermercados);


module.exports = router;
