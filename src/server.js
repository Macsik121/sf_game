const Progress = require('./Progress.js');
const express = require('express');
const app = express();

const progress = new Progress();

app.use('/', express.static('src/pages'));
app.use('/', express.static('src'));
app.use('/sprites', express.static('sprites'));
app.use('/locations', express.static('locations'));
app.use('/locations_tracks', express.static('locations_tracks'));
app.use('/sakkal-majalla-2-webfont', express.static('sakkal-majalla-2-webfont'));

app.get('/load-progress', (req, res) => res.send(progress));
app.post('/save-progress', (req, res) => {
    console.log(req.body);
    
    progress = { ...req.body.progress, ...progress };
    res.status(200).send("Progress is saved");
});

app.listen(3000, () => console.log("Server has been started"));
