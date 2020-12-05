const { Model, DataTypes } = require('sequelize')
const sequelize = require('./connection')

class List extends Model {}

List.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'lists' })

module.exports = List