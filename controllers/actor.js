const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const ActorService = require("../services/actor")

const createActor = async (req, res) => {
    const actorData = req.body

    try {
        const actor = await ActorService.createActor(actorData)

        const response = apiResponse(actor, status.success, messages.success)

        res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        res.status(status.badRequest).json(response)
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await ActorService.getAllActors()

        const response = apiResponse(actors, status.success, messages.success)

        res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        res.status(status.internalServerError).json(response)
    }
}

const getActorById = async (req, res) => {
    try {
        const actor = await ActorService.getActorById()

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            res.status(status.notFound).json(response)
        }

        const response = apiResponse(data, status.success, messages.success)

        res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        res.status(status.internalServerError).json(response)
    }
}

const updateActor = async (req, res) => {
    const idActor = req.params.id
    const dataActor = req.body

    try {
        const actor = await ActorService.updateActor(idActor, dataActor)

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            res.status(status.notFound).json(response)
        }

        const response = apiResponse(data, status.success, messages.success)

        res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        res.status(status.badRequest).json(response)
    }
}

const deleteActor = async (req, res) => {
    const idActor = req.params.id

    try {
        const actor = await ActorService.deleteActor(idActor)

        if (!actor) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            res.status(status.notFound).json(response)
        }

        const response = apiResponse(data, status.success, messages.success)

        res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createActor,
    getAllActors,
    getActorById,
    updateActor,
    deleteActor
}