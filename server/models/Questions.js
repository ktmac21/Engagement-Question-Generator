const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    question: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 

});

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;