const express = require('express');
const path = require('path');
const util = require('util');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

// Helper method for generating unique ids
// const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, ()=>
    console.log(`App listening at http://localhost:${PORT}`)
)