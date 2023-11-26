const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const rangerService = require("../services/ranger")

const createRanger = async (req, res) => {
    const rangerData = req.body

    try {
        const ranger = await rangerService.createRanger(rangerData)

        const response = apiResponse(ranger, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const getAllRangers = async (req, res) => {
    const filterParams = req.query

    try {
        const rangers = await rangerService.getAllRangers(filterParams)

        const response = apiResponse(rangers, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const getRangerById = async (req, res) => {
    const idRanger = req.params.id

    try {
        const ranger = await rangerService.getRangerById(idRanger)

        if (!ranger) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(ranger, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const updateRanger = async (req, res) => {
    const idRanger = req.params.id
    const dataRanger = req.body

    try {
        const ranger = await rangerService.updateRanger(idRanger, dataRanger)

        if (!ranger) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(ranger, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const deleteRanger = async (req, res) => {
    const idRanger = req.params.id

    try {
        const ranger = await rangerService.deleteRanger(idRanger)

        if (!ranger) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(ranger, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createRanger,
    getAllRangers,
    getRangerById,
    updateRanger,
    deleteRanger,
}