const { Model, DataTypes } = require('sequelize')
const sequelize = require('./connection')

class Lists extends Model {}

Lists.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'lists' })

module.exports = Lists