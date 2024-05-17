const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Produto = require('./modeloProduto');
const Supermercado = require('./modeloSupermercado');

const ProdutoSupermercado = sequelize.define('ProdutoSupermercado', {
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

Produto.belongsToMany(Supermercado, { through: ProdutoSupermercado, as: 'supermercados' });
Supermercado.belongsToMany(Produto, { through: ProdutoSupermercado, as: 'produtos' });


module.exports = ProdutoSupermercado;
