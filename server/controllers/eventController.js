const model = require('../models/eventModel.js');

const eventController = {};

const { Event, Detail } = model;

eventController.getEvents = (req, res, next) => {
    //displays all events
    Event.find({}).exec()
    .then(results => {
        res.locals.events = results;
        // console.log('results here', results)
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Middleware error: getEvents',
            message: {err: 'error occurred'}
        })
    });
}

eventController.createEvent = (req, res, next) => {
    //creates event
    console.log('in create event');
    const eventInfo = {
        name: req.body.name,
        date: req.body.date,
        location: req.body.location
    };
    Event.create(eventInfo, (err, result) => {
        if (err) return (err);
        res.locals.newEvent = result
        return next();
    })
}

eventController.deleteEvent = (req, res, next) => {
    //deletes event
    Event.deleteOne({name: req.body.name}, (err) => {
        if (err) return (err);
        else {
            return next();
        }
    })
}

eventController.getDetails = (req, res, next) => {
    Detail.find({}).exec()
    .then(results => {
        res.locals.details = results;
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Middleware error: getDetails',
            message: {err: 'error occurred'}
        })
    });
}

eventController.createDetail = (req, res, next) => {
    console.log('in create detail', req.body)
    const detailInfo = {
        guest: req.body.guest,
        dish: req.body.dish,
        specificDish: req.body.specificDish
    }
    Detail.create(detailInfo, (err, result) => {
        if (err) return (err);
        res.locals.newDetail = result
        return next();
    });
}

module.exports = eventController;