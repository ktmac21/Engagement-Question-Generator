const express = require('express');
const db = require('./config/connection')
const questionsRoute = require('./routes/questions')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use('/questions', questionsRoute);

db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
    console.log('MongoDB database connection established successfully!');
});
});
