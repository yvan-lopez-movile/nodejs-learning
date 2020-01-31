const request = require('request');

const url = 'https://api.darksky.net/forecast/a64597ee3cdf99a15d3532c84aaabdab/-9.12456,-78.5280?lang=es&units=auto';

request({url: url, json: true}, (error, response) => {
//    console.log(response.body.currently);
    const currently = response.body.currently;
    const deg = currently.temperature;
    const precip = currently.precipProbability;

    console.log(response.body.daily.data[0].summary + ' Actualmente la temperatura es de: ' + deg + ' ºC. Y Hay una probabilidad de ' + precip + '% que llueva.');
});

const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/nuevo%20chimbote.json?access_token=pk.eyJ1IjoieXZhbmNobyIsImEiOiJjazYycHFvbW4wZ3p3M2VyMGFoa2c0djZvIn0.eFTSfw0iVpLb-ulQ5gjnkQ&limit=1';
request({url: urlGeo, json: true}, (error, response) => {
    const data = response.body;
    const coord = data.features[0].center;

    console.log('lat: ' + coord[1]);
    console.log('lon: ' + coord[0]);
});

