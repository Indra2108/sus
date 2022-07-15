const { nanoid } = require("nanoid")
const { sequelize } = require("../dbconfig/models")
const { removeHttp } = require("../util/removeHttp")

const sendUrlHandler = async (request, h) => {
    try {
        const { originalURL, customURL } = request.payload

        const UserURL = sequelize.models.UrlDB

        const originalStr = removeHttp(originalURL.toString())
        const customStr = customURL.toString()
        const randomURL = nanoid(5)

        const customURLDB = await UserURL.findOne({ where: { customURL } })

        if (customURLDB) {
            return h.response({
                status: 'fail',
                message: 'Custom URL already use!'
            }).code(404)
        }
        if (customURLDB.customURL) {
            return h.response({
                status: 'fail',
                message: 'Custom URL already use!'
            }).code(404)
        }

        if (!customURL) {

            UserURL.create({
                originalURL: originalStr,
                customURL: randomURL
            }) // tolong tambahkan transaction

            return h.response({
                status: 'success',
                generatedURL: randomURL
            }).code(201)
        }

        UserURL.create({
            originalURL: originalStr,
            customURL: customStr
        }) // tolong tambahkan transaction

        return h.response({
            status: 'success',
            generatedURL: customStr
        }).code(201)

    } catch (error) {
        console.error(error)
        h.response({
            status: 'fail',
            message: 'Internal Server Error'
        }).code(500)
    }
}

module.exports = sendUrlHandler