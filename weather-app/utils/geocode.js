const request = require('request');

const geocode = (address, callback) => {
    const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieXZhbmNobyIsImEiOiJjazYycHFvbW4wZ3p3M2VyMGFoa2c0djZvIn0.eFTSfw0iVpLb-ulQ5gjnkQ&limit=1';

    request({url: urlGeo, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation service!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    });
}

module.exports = geocode;
