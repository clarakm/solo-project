const express = require('express');
const app = express();
const eventController = require('./controllers/eventController.js');
const path = require('path');
const bodyParser = require('body-parser');

// create a GET route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/events/create', eventController.createEvent, (req, res) => {
    res.status(200).json(res.locals.events);
})

app.get('/events', eventController.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
});

app.post('/events', eventController.deleteEvent, (req, res) => {
    res.status(200).json(res.locals.events);
})

app.use('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.use('/', (req, res) => {
    res.sendStatus(404);
})

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {err: 'error occurred'}
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => {
    console.log('Listening to Port 3000')
});