const { seasonFilterParams } = require("../helpers/season")
const Season = require("../models/season")

const createSeason = async (dataSeason) => {
    try {
        const season = await Season.create(dataSeason)

        return season
    } catch (error) {
        throw error

    }
}

const getAllSeasons = async (filterParams) => {
    try {
        const filter = seasonFilterParams(filterParams)

        const { offset, limit, deleted } = filterParams

        const seasons = await Season.findAll({
            where: filter,
            limit: limit,
            offset: offset,
            paranoid: !deleted,
        })

        return seasons
    } catch (error) {
        throw error

    }
}

const getSeasonById = async (idSeason) => {
    try {
        const season = await Season.findByPk(idSeason)

        return season
    } catch (error) {
        throw error

    }
}

const updateSeason = async (idSeason, dataSeason) => {
    try {
        await Season.update(
            dataSeason, {
            where: {
                id: idSeason
            }
        })

        const season = await Season.findByPk(idSeason)

        return season
    } catch (error) {
        throw error

    }
}

const deleteSeason = async (idSeason) => {
    try {
        await Season.destroy({
            where: {
                id: idSeason
            }
        });

        const season = await Season.findByPk(
            idSeason,
            {
                paranoid: false,
            }
        )

        return season
    } catch (error) {
        throw error

    }
}

module.exports = {
    createSeason,
    getAllSeasons,
    getSeasonById,
    updateSeason,
    deleteSeason,
}