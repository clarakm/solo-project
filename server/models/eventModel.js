const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
document schema should have name, date, location
*/

const eventSchema = new Schema({
    name: String,
    date: String,
    location: String
})

const Event = mongoose.model('event', eventSchema);

module.exports = { Event }