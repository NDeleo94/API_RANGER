const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Actor = sequelize.define('Actor',
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deathday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        paranoid: true,
    },
);

module.exports = Actor