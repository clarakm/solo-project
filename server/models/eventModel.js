const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://clarak:Kyh051396@cluster0-gmfyz.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'potluck'
  })
  .then(()=>console.log('Connected to Mongo DB.'))
  .catch(err=>console.log(err));
  
/*
document schema should have name, date, location
*/

const eventSchema = new Schema({
    name: String,
    date: String,
    location: String
})

const Event = mongoose.model('event', eventSchema);

const eventDetailsSchema = new Schema({
  guest: String,
  dish: String,
  specificDish: String
})

const Detail = mongoose.model('detail', eventDetailsSchema);

module.exports = { Event, Detail }