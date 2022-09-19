const Sequelize = require('sequelize');
const db =  require('../config/database');

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    device: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    heartrate: {
        type: Sequelize.INTEGER,
    },
    emergency: {
        type: Sequelize.TINYINT,
    }
})

module.exports = Users;