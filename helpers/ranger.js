const { Op } = require("sequelize");

const rangerFilterParams = (params) => {
    const filter = {}

    if (params.fullname) {
        filter.fullname
            = { [Op.substring]: params.fullname };
    }

    return filter
}

module.exports = { rangerFilterParams }