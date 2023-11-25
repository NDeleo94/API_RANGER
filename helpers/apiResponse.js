const apiResponse = (data, status, message) => {
    return {
        data: data,
        status: status,
        message: message,
    }
}

module.exports = { apiResponse }