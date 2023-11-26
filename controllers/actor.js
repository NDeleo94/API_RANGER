const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const actorService = require("../services/actor")

const createActor = async (req, res) => {
    const actorData = req.body

    try {
        const actor = await actorService.createActor(actorData)

        const response = apiResponse(actor, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const getAllActors = async (req, res) => {
    const filterParams = req.query

    try {
        const actors = await actorService.getAllActors(filterParams)

        const response = apiResponse(actors, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const getActorById = async (req, res) => {
    const idActor = req.params.id

    try {
        const actor = await actorService.getActorById(idActor)

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(actor, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const updateActor = async (req, res) => {
    const idActor = req.params.id
    const dataActor = req.body

    try {
        const actor = await actorService.updateActor(idActor, dataActor)

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(actor, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const deleteActor = async (req, res) => {
    const idActor = req.params.id

    try {
        const actor = await actorService.deleteActor(idActor)

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(actor, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createActor,
    getAllActors,
    getActorById,
    updateActor,
    deleteActor
}