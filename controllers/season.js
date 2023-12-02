const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const seasonService = require("../services/season")

const createSeason = async (req, res) => {
    const seasonData = req.body

    try {
        const season = await seasonService.createSeason(seasonData)

        const response = apiResponse(season, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const getAllSeasons = async (req, res) => {
    const filterParams = req.query

    try {
        const seasons = await seasonService.getAllSeasons(filterParams)

        const response = apiResponse(seasons, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const getSeasonById = async (req, res) => {
    const idSeason = req.params.id

    try {
        const season = await seasonService.getSeasonById(idSeason)

        if (!season) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(season, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const updateSeason = async (req, res) => {
    const idSeason = req.params.id
    const dataSeason = req.body

    try {
        const season = await seasonService.updateSeason(idSeason, dataSeason)

        if (!season) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(season, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const deleteSeason = async (req, res) => {
    const idSeason = req.params.id

    try {
        const season = await seasonService.deleteSeason(idSeason)

        if (!season) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(season, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createSeason,
    getAllSeasons,
    getSeasonById,
    updateSeason,
    deleteSeason,
}