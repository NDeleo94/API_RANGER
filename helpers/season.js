const { Op } = require("sequelize");

const seasonFilterParams = (params) => {
    const filter = {}

    if (params.season) {
        filter.season
            = { [Op.substring]: params.season };
    }

    if (params.numberSeason_s && params.numberSeason_e) {
        filter.numberSeason
            = { [Op.between]: [params.numberSeason_s, params.numberSeason_e] };
    }

    if (params.release_s && params.release_e) {
        filter.releaseDate
            = { [Op.between]: [params.release_s, params.release_e] };
    }

    if (params.episodes_s && params.episodes_e) {
        filter.episodes
            = { [Op.between]: [params.episodes_s, params.episodes_e] };
    }

    return filter
}

module.exports = { seasonFilterParams }