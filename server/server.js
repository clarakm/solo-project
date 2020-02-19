const express = require('express');
const app = express();

// create a GET route
app.get('/events', (req, res) => {
    const obj = {
        name: 'potluck',
        date: 'monday',
        location: 'codesmith'
    };
    console.log(obj)

  res.status(200).json(obj);
});

app.listen(3000, () => {
    console.log('Listening to Port 3000')
});