const responseUrl = require("../handler/responseURL")
const sendUrlHandler = require("../handler/sendUrlHandler")

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: () => 'hello world'
    },
    {
        method: 'POST',
        path: '/sendurl',
        handler: sendUrlHandler
    },
    {
        method: 'GET',
        path: '/{userparam}',
        handler: responseUrl
    },
]