const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Team = sequelize.define('Team',
    {
        team: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
    },
);

module.exports = Team