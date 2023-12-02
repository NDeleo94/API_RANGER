const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Ranger = sequelize.define('Ranger',
    {
        ranger: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
    },
);

module.exports = Ranger