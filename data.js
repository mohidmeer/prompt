const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mvendor', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err); 
    })