const model = require('../models/eventModel.js');

const eventController = {};

const { Event } = model;

eventController.getEvents = (req, res, next) => {
    //displays all events
    // Event.find({}).exec()
    // .then(results => {
    //     res.locals.events = results;
    //     console.log('results here', results)
    //     return next();
    // })
    // .catch((err) => {
    //     return next({
    //         log: 'Middleware error: getEvents',
    //         message: {err: 'error occurred'}
    //     })
    // })
    const obj = {
        name: 'test potluck',
        date: 'wednesday',
        location: 'house'
    };
    res.locals.events = obj;
    return next();
}

eventController.createEvent = (req, res, next) => {
    //creates event
    console.log('in create event');
    console.log(req.body);
}

eventController.deleteEvent = (req, res, next) => {
    //deletes event
}

module.exports = eventController;