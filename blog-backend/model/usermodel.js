const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');


let User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
    },
    nickname: {
        type: Sequelize.STRING
    },
    signtime: {
        type: Sequelize.DATE
    },
    profile: {
        type: Sequelize.STRING
    }

});

// User.sync();

module.exports = User;