const { Op } = require("sequelize");

const teamFilterParams = (params) => {
    const filter = {}

    if (params.team) {
        filter.team
            = { [Op.substring]: params.team };
    }

    return filter
}

module.exports = { teamFilterParams }