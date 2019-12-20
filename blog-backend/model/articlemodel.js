const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');
const User = require('./usermodel')

let Article = sequelize.define('article', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        defaultValue: ""
    },
    authorid: {
        type: Sequelize.INTEGER,
        referances: {
            model: User,
            key: "id"
        }
    },
    target: {
        type: Sequelize.STRING
    },
    clickTimes: {
        type: Sequelize.STRING
    }
});

//Article.sync();

module.exports = Article;