const mysql = require('mysql2')
const Sequelize = require('sequelize')

const sequalize = new Sequelize(process.env.LOCAL_URL)

module.exports = sequelize