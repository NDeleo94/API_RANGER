const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const teamService = require("../services/team")

const createTeam = async (req, res) => {
    const teamData = req.body

    try {
        const team = await teamService.createTeam(teamData)

        const response = apiResponse(team, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const getAllTeams = async (req, res) => {
    const filterParams = req.query

    try {
        const teams = await teamService.getAllTeams(filterParams)

        const response = apiResponse(teams, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const getTeamById = async (req, res) => {
    const idTeam = req.params.id

    try {
        const team = await teamService.getTeamById(idTeam)

        if (!team) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(team, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const updateTeam = async (req, res) => {
    const idTeam = req.params.id
    const dataTeam = req.body

    try {
        const team = await teamService.updateTeam(idTeam, dataTeam)

        if (!team) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(team, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const deleteTeam = async (req, res) => {
    const idTeam = req.params.id

    try {
        const team = await teamService.deleteTeam(idTeam)

        if (!team) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(team, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeam,
    deleteTeam,
}