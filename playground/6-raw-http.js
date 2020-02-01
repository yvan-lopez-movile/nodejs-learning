const https = require('https')

const url = 'https://api.darksky.net/forecast/a64597ee3cdf99a15d3532c84aaabdab/-9.1290887,-78.53201?lang=es&units=auto';

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString();
        console.log(data)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
});

request.on('error', (error) => {
    console.log('An error', error)
});

request.end();
