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

    const idProduto = req.body.idProduto;
    const nomeProduto = req.body.nome

    if (!idProduto && !nomeProduto) throw new Error('ID do produto ou Nome é obrigatório');

    if (idProduto) {
      const produto = await Produto.findByPk(idProduto)
      res.json(produto);
    }else if(nomeProduto){
      const produto = await Produto.findOne({ where: { nome: nomeProduto } });
      res.json(produto);
    } 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const apagarProduto = async (req, res) => {
  try {
    const {idProduto} = req.body;

    if (!idProduto) throw new Error('ID é obrigatorio');
    const produto = await Produto.findByPk(idProduto);

    if (!produto) throw new Error('Produto não encontrado');

    produto.destroy({
      where: {
        id: idProduto,
      },
    });
    
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const editarProduto = async (req, res) => {
  try {
    const {idProduto, nomeProduto, precoProduto} = req.body;

    if (!idProduto && !nomeProduto && !precoProduto) throw new Error('Campos obrigatorios não foram preenchidos');
    const produto = await Produto.findByPk(idProduto);

    if (!produto) throw new Error('Produto não encontrado');

    produto.update({ nome: nomeProduto, preco: precoProduto  })

    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
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

module.exports = { criarProduto , obterProdutos, obterProduto, editarProduto, apagarProduto}