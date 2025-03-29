require('dotenv').config();
const bodyParser = require('body-parser');
const Progress = require('./Progress.js');
const express = require('express');
const app = express();

let progress = new Progress();

app.use('/', express.static('src'));
app.use('/bad_quality_locations', express.static('bad_quality_locations'));
app.get('/', (req, res) => res.redirect('/pages/location_1.html'));
app.use('/sprites', express.static('sprites'));
app.use('/locations', express.static('locations'));
app.use('/locations_tracks', express.static('locations_tracks'));
app.use('/sakkal-majalla-2-webfont', express.static('sakkal-majalla-2-webfont'));

app.use(express.json());

app.get('/load-progress', (req, res) => res.send(progress));
app.post('/save-progress', (req, res) => {
    progress = { ...progress, ...req.body, };
    console.log(`Progress out of save-progress:`);
    console.log(req.body);
    res.status(200).send("Progress is saved");
});

app.listen(3000, () => console.log("Server has been started"));
