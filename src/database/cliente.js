const Sequelize = require('sequelize')
const database = require('./db')

const cliente = database.define('cliente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: { 
        type: Sequelize.STRING,
        allowNull: false
    },

    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    autoemail: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }

 
})

module.exports = cliente
