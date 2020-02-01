const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'https://api.darksky.net/forecast/a64597ee3cdf99a15d3532c84aaabdab/-9.12456,-78.5280?lang=es&units=auto';
//
// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location!');
//     } else {
//         //    console.log(response.body.currently);
//         const currently = response.body.currently;
//         const deg = currently.temperature;
//         const precip = currently.precipProbability;
//
//         console.log(response.body.daily.data[0].summary + ' Actualmente la temperatura es de: ' + deg + ' ºC. Y Hay una probabilidad de ' + precip + '% que llueva.');
//     }
//
// });
//
// const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/nuevo%20chimbote.json?access_token=pk.eyJ1IjoieXZhbmNobyIsImEiOiJjazYycHFvbW4wZ3p3M2VyMGFoa2c0djZvIn0.eFTSfw0iVpLb-ulQ5gjnkQ&limit=1';
// request({url: urlGeo, json: true}, (error, response) => {
//
//     if(error) {
//         console.log('Unable to connect to geolocation service!')
//     } else if (response.body.features.length === 0){
//         console.log('Unable to find the city!')
//     } else {
//         const data = response.body;
//         const coord = data.features[0].center;
//
//         console.log('lat: ' + coord[1]);
//         console.log('lon: ' + coord[0]);
//     }
//
//
// });


geocode('Nuevo Chimbote', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
