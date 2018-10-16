const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const port = 5000;

const user = require('./routes/api/registryApi');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.urlencoded());

//Database Configuration
const db = require('../config/keys').mongoURI;

//Connect to MongoDB

mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected....'))
    .catch(err => console.log(err));
    mongoose.set('debug', true);

//Use Routes

app.use('/api/register', user);

app.listen(port, (err)=> {
    if(err){
        return console.log('Oops Something bad happened', err)
    }
        console.log(`Server is listening on port: ${port}`)
})
