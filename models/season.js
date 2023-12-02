const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Season = sequelize.define('Season',
    {
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberSeason: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
        },
        episodes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        paranoid: true,
    },
);

module.exports = Season