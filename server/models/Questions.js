const { Schema, model } = require('mongoose'); 

const questionSchema = new Schema ({
    question: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 

});

const Questions = model('Questions', questionSchema);

module.exports = Questions;