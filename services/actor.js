const Actor = require("../models/actor")

const createActor = async (dataActor) => {
    try {
        const actor = await Actor.create(dataActor)

        return actor
    } catch (error) {
        throw error

    }
}

const getAllActors = async () => {
    try {
        const actors = await Actor.findAll({
            paranoid: false
        })

        return actors
    } catch (error) {
        throw error

    }
}

const getActorById = async (idActor) => {
    try {
        const actor = await Actor.findByPk(idActor)

        return actor
    } catch (error) {
        throw error

    }
}

const updateActor = async (idActor, dataActor) => {
    try {
        await Actor.update(
            dataActor, {
            where: {
                id: idActor
            }
        })

        const actor = await Actor.findByPk(idActor)

        return actor
    } catch (error) {
        throw error

    }
}

const deleteActor = async (idActor) => {
    try {
        await Actor.destroy({
            where: {
                id: idActor
            }
        });

        const actor = await Actor.findByPk(
            idActor,
            {
                paranoid: false,
            }
        )

        return actor
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