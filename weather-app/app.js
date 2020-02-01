const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Nuevo Chimbote', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast(-9.12456, -78.5280, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
