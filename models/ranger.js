const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Character = require("./character")

const Ranger = sequelize.define('Ranger',
    {
        fullname: DataTypes.STRING,
    },
    {
        paranoid: true,
    },
);


const RangerCharacter = sequelize.define('RangerCharacter', {
    idCharacter: {
        type: DataTypes.INTEGER,
        references: {
            model: Character, // 'Movies' would also work
            key: 'id'
        }
    },
    idRanger: {
        type: DataTypes.INTEGER,
        references: {
            model: Ranger, // 'Actors' would also work
            key: 'id'
        }
    }
});

Character.belongsToMany(Ranger, { through: RangerCharacter });
Ranger.belongsToMany(Character, { through: RangerCharacter });

// Ranger.belongsTo(Character, {
//     foreignKey: {
//         name: "idActor",
//     },
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

module.exports = Character