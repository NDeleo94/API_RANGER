const { messages } = require("../constants/messages")
const { status } = require("../constants/statusCodes")
const { apiResponse } = require("../helpers/apiResponse")
const characterService = require("../services/character")

const createCharacter = async (req, res) => {
    const characterData = req.body

    try {
        const character = await characterService.createCharacter(characterData)

        const response = apiResponse(character, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const getAllCharacters = async (req, res) => {
    const filterParams = req.query

    try {
        const characters = await characterService.getAllCharacters(filterParams)

        const response = apiResponse(characters, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const getCharacterById = async (req, res) => {
    const idCharacter = req.params.id

    try {
        const character = await characterService.getCharacterById(idCharacter)

        if (!character) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(character, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response)
    }
}

const updateCharacter = async (req, res) => {
    const idCharacter = req.params.id
    const dataCharacter = req.body

    try {
        const character = await characterService.updateCharacter(idCharacter, dataCharacter)

        if (!character) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(character, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

const deleteCharacter = async (req, res) => {
    const idCharacter = req.params.id

    try {
        const character = await characterService.deleteCharacter(idCharacter)

        if (!character) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response)
        }

        const response = apiResponse(character, status.success, messages.success)

        return res.status(status.success).json(response)
    } catch (error) {
        const response = apiResponse(error.message, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response)
    }
}

module.exports = {
    createCharacter,
    getAllCharacters,
    getCharacterById,
    updateCharacter,
    deleteCharacter,
}