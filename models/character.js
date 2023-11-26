const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Actor = require("./actor")

const Character = sequelize.define('Character',
    {
        fullname: DataTypes.STRING,
    },
    {
        paranoid: true,
    },
);

Actor.hasMany(Character)

Character.belongsTo(Actor)

module.exports = Character