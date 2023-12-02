const { teamFilterParams } = require("../helpers/team")
const Team = require("../models/team")

const createTeam = async (dataTeam) => {
    try {
        const team = await Team.create(dataTeam)

        return team
    } catch (error) {
        throw error

    }
}

const getAllTeams = async (filterParams) => {
    try {
        const filter = teamFilterParams(filterParams)

        const { offset, limit, deleted } = filterParams

        const team = await Team.findAll({
            where: filter,
            limit: limit,
            offset: offset,
            paranoid: !deleted,
        })

        return team
    } catch (error) {
        throw error

    }
}

const getTeamById = async (idTeam) => {
    try {
        const team = await Team.findByPk(idTeam)

        return team
    } catch (error) {
        throw error

    }
}

const updateTeam = async (idTeam, dataTeam) => {
    try {
        await Team.update(
            dataTeam, {
            where: {
                id: idTeam
            }
        })

        const team = await Team.findByPk(idTeam)

        return team
    } catch (error) {
        throw error

    }
}

const deleteTeam = async (idTeam) => {
    try {
        await Team.destroy({
            where: {
                id: idTeam
            }
        });

        const team = await Team.findByPk(
            idTeam,
            {
                paranoid: false,
            }
        )

        return team
    } catch (error) {
        throw error

    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeam,
    deleteTeam,
}