const Produto = require('../models/modeloProduto');

const criarProduto = async (req, res) => {
  try {
    const { nome, preco, codigo_barras, quantidade, descricao, imagemUrl } = req.body;

    const novoProduto = await Produto.create({ nome, preco, codigo_barras, quantidade, descricao, imagemUrl });

    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterProduto = async (req, res) => {
  try {

    const idProduto = req.body.idProduto;
    const nomeProduto = req.body.nomeProduto

    if (idProduto) {
      const produto = await Produto.findByPk(idProduto)
      res.json(produto);
    }else if(nomeProduto){
      const produto = await Produto.findOne({ where: { nome: nomeProduto } });
      res.json(produto);
    }else{
      const produtos = await Produto.findAll();
      res.json(produtos);
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

    produto.update({ 
      nome: nomeProduto || produto.nome, 
      preco: precoProduto || produto.preco 
    })

    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { criarProduto , obterProduto, editarProduto, apagarProduto}