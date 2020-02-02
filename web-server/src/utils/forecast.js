const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a64597ee3cdf99a15d3532c84aaabdab/' + latitude + ',' + longitude + '?lang=es&units=auto';

    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            const currently = body.currently;
            const temperature = currently.temperature;
            const rain = currently.precipProbability;

            callback(undefined, body.daily.data[0].summary + ' Actualmente la temperatura es de: ' + temperature + ' ºC. Y Hay una probabilidad de ' + rain + '% que llueva.');
        }

    });
}

module.exports = forecast;
