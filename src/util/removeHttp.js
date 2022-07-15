module.exports.removeHttp = (url) => {
    if (url.startsWith('https://')) {
        const https = 'https://';
        return url.slice(https.length);
    }

    if (url.startsWith('http://')) {
        const http = 'http://';
        return url.slice(http.length);
    }

    return url;
}

// Source Code: https://bobbyhadz.com/blog/javascript-remove-http-https-from-url#:~:text=To%20remove%20http%3A%2F%2F%20or,http%3A%2F%2F%20part%20is%20removed.