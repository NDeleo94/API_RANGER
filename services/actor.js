const Actor = require("../models/actor")

const createActor = async (dataActor) => {
    try {
        const actor = Actor.create(dataActor)

        return actor
    } catch (error) {
        throw error

    }
}

const getAllActors = async () => {
    try {
        const actors = Actor.findAll()

        return actors
    } catch (error) {
        throw error

    }
}

const getActorById = async () => {
    try {
        const actor = Actor.findByPk()

        return actor
    } catch (error) {
        throw error

    }
}

const updateActor = async (idActor, dataActor) => {
    try {
        const actor = Actor.findByPk()

        return actor
    } catch (error) {
        throw error

    }
}

const deleteActor = async (idActor) => {
    try {
        return "hola"
    } catch (error) {
        throw error

    }
}

module.exports = {
    createActor,
    getAllActors,
    getActorById,
    updateActor,
    deleteActor,
}