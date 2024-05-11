const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Supermercado = require('./modeloSupermercado')

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
Supermercado.hasMany(Produto);
Produto.belongsTo(Supermercado);

module.exports = Produto;
