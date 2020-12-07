const mysql = require('mysql2')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/gift_db')

module.exports = sequelize