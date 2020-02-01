const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
        msg: 'Estamos para ayudarte',
        name: 'Yvan Lopez'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Todo el dia soleado',
        location: 'Chimbote'
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Help article not found',
        name: 'Yvan Lopez'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Page not found',
        name: 'Yvan Lopez'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
