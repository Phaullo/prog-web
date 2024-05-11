const Supermercado = require('../models/modeloSupermercado');
const Produto = require('../models/modeloProduto');

const criarSupermercado = async (req, res) => {
  try {
    const novoSupermercado = await Supermercado.create(req.body);
    res.status(201).json(novoSupermercado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterSupermercados = async (req, res) => {
  try {
    const supermercados = await Supermercado.findAll();
    res.json(supermercados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterSupermercado = async (req, res) => {
  try {
    const supermercadoId = req.params.supermercadoId;

    const supermercado = await Supermercado.findByPk(supermercadoId);
    if (!supermercado) throw new Error('Supermercado não encontrado');

    res.json(supermercado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterProdutosSupermercados = async (req, res) => {
  try {
    const supermercadoId = req.params.supermercadoId;

    const supermercado = await Supermercado.findByPk(supermercadoId, { include: Produto });
    if (!supermercado) throw new Error('Supermercado não encontrado');

    res.json(supermercado.Produtos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { obterSupermercados, obterSupermercado , criarSupermercado, obterProdutosSupermercados}