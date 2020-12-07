const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Item extends Model {}

Item.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, { sequelize, modelName: 'item' })

module.exports = Item