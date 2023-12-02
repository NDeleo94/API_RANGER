const { Op } = require("sequelize");

const rangerFilterParams = (params) => {
    const filter = {}

    if (params.ranger) {
        filter.ranger
            = { [Op.substring]: params.ranger };
    }

    return filter
}

module.exports = { rangerFilterParams }