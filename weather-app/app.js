const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const userArg = process.argv[2];
if (!userArg) {
    console.log('Address was not provided.');
} else {
    geocode(userArg, (error, data) => {
        if (error) {
            return console.log(error);
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forecastData);
        });
    });
}




