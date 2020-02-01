const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const userArg = process.argv[2];
if (!userArg) {
    console.log('Address was not provided.');
} else {
    geocode(userArg, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
}




