const Sequelize = require('sequelize');
const db = require('../config/database');

const Pis = db.define('pis', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pi: {
        type: Sequelize.STRING
    },
    watch: {
        type: Sequelize.STRING
    },
    rssi: {
        type: Sequelize.INTEGER
    },
    updatetime: {
        type: Sequelize.TIME
    }
})


module.exports = Pis;