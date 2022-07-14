module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Hallo World'
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: () => {
            return 'Nyasar mank'
        }
    }
]