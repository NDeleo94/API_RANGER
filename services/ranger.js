const { rangerFilterParams } = require("../helpers/ranger")
const Ranger = require("../models/ranger")

const createRanger = async (dataRanger) => {
    try {
        const ranger = await Ranger.create(dataRanger)

        return ranger
    } catch (error) {
        throw error

    }
}

const getAllRangers = async (filterParams) => {
    try {
        const filter = rangerFilterParams(filterParams)

        const { offset, limit, deleted } = filterParams

        const rangers = await Ranger.findAll({
            where: filter,
            limit: limit,
            offset: offset,
            paranoid: !deleted,
        })

        return rangers
    } catch (error) {
        throw error

    }
}

const getRangerById = async (idRanger) => {
    try {
        const ranger = await Ranger.findByPk(idRanger)

        return ranger
    } catch (error) {
        throw error

    }
}

const updateRanger = async (idRanger, dataRanger) => {
    try {
        await Ranger.update(
            dataRanger, {
            where: {
                id: idRanger
            }
        })

        const ranger = await Ranger.findByPk(idRanger)

        return ranger
    } catch (error) {
        throw error

    }
}

const deleteRanger = async (idRanger) => {
    try {
        await Ranger.destroy({
            where: {
                id: idRanger
            }
        });

        const ranger = await Ranger.findByPk(
            idRanger,
            {
                paranoid: false,
            }
        )

        return ranger
    } catch (error) {
        throw error

    }
}

module.exports = {
    createRanger,
    getAllRangers,
    getRangerById,
    updateRanger,
    deleteRanger,
}