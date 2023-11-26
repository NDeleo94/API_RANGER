const { Op } = require("sequelize");

const actorFilterParams = (params) => {
    const filter = {}

    if (params.fullname) {
        filter.fullname
            = { [Op.substring]: params.fullname };
    }

    return filter
}

module.exports = { actorFilterParams }