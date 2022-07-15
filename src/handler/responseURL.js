const { sequelize } = require("../dbconfig/models")

const responseUrl = async (request, h) => {
    try {

        const { userparam } = request.params

        const UserURL = sequelize.models.UrlDB

        const userParamUrl = await UserURL.findOne({ where: { customURL: userparam } })

        if (!userParamUrl) {
            return h.response({
                status: 'fail',
                message: 'URL Not Found'
            }).code(404)
        }

        return h.redirect('https://' + userParamUrl.originalURL).code(301)

    } catch (error) {
        console.error(error)
        h.response({
            status: 'fail',
            message: 'Internal Server Error'
        }).code(500)
    }


}

module.exports = responseUrl