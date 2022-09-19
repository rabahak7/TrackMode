const { Sequelize } = require('sequelize');

module.exports = new Sequelize('tmdb', 'root', 'root', {
    // host: '192.168.0.10',
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
        logQueryParameters: true
    }
});