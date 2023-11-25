const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Character = sequelize.define('Character', {
    fullName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    sex: DataTypes.STRING,
});

module.exports = Character