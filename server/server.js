const express = require('express');
const app = express();
const eventController = require('./controllers/eventController.js');

// create a GET route
app.get('/events', eventController.getEvents, (req, res) => {
    const obj = {
        name: 'potluck',
        date: 'monday',
        location: 'codesmith'
    };

  res.status(200).json(res.locals.events);
});

// app.get('/create', (req,res) => {
//     res.status(200).send('hello')
// })

// app.post('/create', (req, res) => {
//     res.status(200).send('hello')
// })

app.get('/', (req, res) => {
    res.status(200).send('login page')
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