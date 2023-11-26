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

Character.belongsTo(Actor, {
    foreignKey: {
        name: "idActor",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

module.exports = Character