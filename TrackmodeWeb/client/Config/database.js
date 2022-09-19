const { Sequelize } = require('sequelize');

module.exports = new Sequelize('tmdb', 'admin', '1234', {
    host: '192.168.0.10',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
        logQueryParameters: true
    }
});