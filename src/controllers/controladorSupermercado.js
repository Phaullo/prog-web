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

const editarSupermercado = async (req, res) => {
  try {
    const {idMercado, nomeMercado, enderecoMercado} = req.body;

    if (!idMercado && !nomeMercado && !enderecoMercado) throw new Error('Campos obrigatorios não foram preenchidos');
    const mercado = await Supermercado.findByPk(idMercado);

    if (!mercado) throw new Error('Mercado não encontrado');

    mercado.update({ nome: nomeMercado, localizacao: enderecoMercado  })

    res.status(201).json(mercado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const apagarSupermercado = async (req, res) => {
  try {
    const {idMercado} = req.body;

    if (!idMercado) throw new Error('ID é obrigatorio');
    const mercado = await Supermercado.findByPk(idMercado);

    if (!mercado) throw new Error('Mercado não encontrado');

    mercado.destroy({
      where: {
        id: idMercado,
      },
    });
    
    res.status(201).json(mercado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { obterSupermercados, obterSupermercado , criarSupermercado, obterProdutosSupermercados, editarSupermercado, apagarSupermercado}