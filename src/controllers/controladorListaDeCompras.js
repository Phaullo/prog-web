const Supermercado = require('../models/modeloSupermercado');
const Produto = require('../models/modeloProduto');



const obterProdutosLista = async (req, res) => {
    try {
      const codigosBarras = req.body.codigosBarras;
        const produtos = await Produto.findAll({ where: { codigo_barras: codigosBarras } });
        const dataValuesArray = produtos.map(produto => produto.dataValues);
        console.log(produtos.length, dataValuesArray)

      res.json({res: "ok"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {  obterProdutosLista } 