const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yvan Lopez'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Acerca de mi',
        name: 'Yvan Lopez'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'Estamos para ayudarte'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Todo el dia soleado',
        location: 'Chimbote'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});

