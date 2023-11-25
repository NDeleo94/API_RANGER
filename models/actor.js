const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Actor = sequelize.define('Actor', {
    fullName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
});

module.exports = Actor