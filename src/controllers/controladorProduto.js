const Produto = require('../models/modeloProduto');
const Supermercado = require('../models/modeloSupermercado')
const criarProduto = async (req, res) => {
  try {
    const idSupermercado = req.body.idSupermercado;
    const { nome, preco } = req.body;

    if (!idSupermercado) throw new Error('ID do supermercado é obrigatório');

    const supermercado = await Supermercado.findByPk(idSupermercado);
    if (!supermercado) throw new Error('Supermercado não encontrado');

    const novoProduto = await Produto.create({ nome, preco, SupermercadoId: idSupermercado });

    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterProduto = async (req, res) => {
  try {
    const idPproduto = req.params.produtoId;

    if (!idPproduto) throw new Error('ID do produto é obrigatório');

    const produto = await Produto.findByPk(idPproduto);
    res.json(produto);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const obterProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarProduto , obterProdutos, obterProduto}