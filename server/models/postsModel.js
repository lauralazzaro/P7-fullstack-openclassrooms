const Sequelize = require('sequelize');
const db = require('../database/db.connect');

const post = db.define('post', {
    id_post: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        unsigned: true,
        reference: {
            model: 'user',
            key: 'id_user'
        }
    },
    text:{
        type: Sequelize.TEXT
    },
    imageUrl:{
        type: Sequelize.STRING,
        unsigned: true,
    },
    id_subject:{
        type: Sequelize.INTEGER,
        unsigned: true,
    }
});

module.exports = post;