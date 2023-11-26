const { Op } = require("sequelize");

const actorFilterParams = (params) => {
    const filter = {}

    if (params.fullname) {
        filter.fullname
            = { [Op.substring]: params.fullname };
    }

    if (params.birthday_s && params.birthday_e) {
        filter.birthday
            = { [Op.between]: [params.birthday_s, params.birthday_e] };
    }

    if (params.deathday_s && params.deathday_e) {
        filter.deathday
            = { [Op.between]: [params.deathday_s, params.deathday_e] };
    }

    return filter
}

module.exports = { actorFilterParams }