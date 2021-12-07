const express = require('express');
const mongoose = require('mongoose');
const questionsRoute = require('./routes/questions')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true } 
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!')
})

app.use('/questions', questionsRoute)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});