const { characterFilterParams } = require("../helpers/character")
const Character = require("../models/character")

const createCharacter = async (dataCharacter) => {
    try {
        const character = await Character.create(dataCharacter)

        return character
    } catch (error) {
        throw error

    }
}

const getAllCharacters = async (filterParams) => {
    try {
        const filter = characterFilterParams(filterParams)

        const { offset, limit, deleted } = filterParams

        const characters = await Character.findAll({
            where: filter,
            limit: limit,
            offset: offset,
            paranoid: !deleted,
        })

        return characters
    } catch (error) {
        throw error

    }
}

const getCharacterById = async (idCharacter) => {
    try {
        const character = await Character.findByPk(idCharacter)

        return character
    } catch (error) {
        throw error

    }
}

const updateCharacter = async (idCharacter, dataCharacter) => {
    try {
        await Character.update(
            dataCharacter, {
            where: {
                id: idCharacter
            }
        })

        const character = await Character.findByPk(idCharacter)

        return character
    } catch (error) {
        throw error

    }
}

const deleteCharacter = async (idCharacter) => {
    try {
        await Character.destroy({
            where: {
                id: idCharacter
            }
        });

        const character = await Character.findByPk(
            idCharacter,
            {
                paranoid: false,
            }
        )

        return character
    } catch (error) {
        throw error

    }
}

module.exports = {
    createCharacter,
    getAllCharacters,
    getCharacterById,
    updateCharacter,
    deleteCharacter,
}