const Produto = require("../models/modeloProduto");
const Supermercado = require("../models/modeloSupermercado");
const ProdutoSupermercado = require("../models/RelacaoProdutoMercado");

const criarProdSupermercado = async (req, res) => {

    const { supermercadoId } = req.params;
    const { produtoId, preco } = req.body;

    try {
        const supermercado = await Supermercado.findByPk(supermercadoId);
        if (!supermercado) {
            return res.status(404).json({ message: 'Supermercado não encontrado.' });
        }

        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        console.log('=>', produto)
        await ProdutoSupermercado.create({
            ProdutoId: produtoId,
            SupermercadoId: supermercadoId,
            preco: preco
        });

        res.status(201).json({ message: 'Produto cadastrado no supermercado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar o produto no supermercado.' });
    }
};

const obterProdutosSupermercados = async (req, res) => {
    const { supermercadoId } = req.params;

    try {
        const supermercado = await Supermercado.findByPk(supermercadoId, {
            include: {
              model: Produto,
              as: 'produtos',
              through: {
                attributes: ['preco'],
              },
            },
          });
        
      res.json(supermercado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
module.exports = {  
    criarProdSupermercado,
    obterProdutosSupermercados
}