const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieSession = require('cookie-session');

const KEYS = require('./Keys');


const app = express();

//Server configuration
app.set('trust proxy', true) // trust first proxy
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({
    signed: false,
    // secure: true
}));
//configure and run and mongodb
mongoose.connect(KEYS.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Database Running');
        //run and listen to {PORT}
        app.listen(KEYS.PORT, () => console.log(`Server Running on Port ${KEYS.PORT}`));
    })
    .catch(err => console.log(`Mongodb error: ${err.message}`));

module.exports = app;