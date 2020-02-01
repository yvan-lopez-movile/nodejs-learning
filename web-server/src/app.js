const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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

