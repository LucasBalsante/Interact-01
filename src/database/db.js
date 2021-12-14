const Sequelize = require('sequelize')
const sequelize = new Sequelize('bd_interact', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize