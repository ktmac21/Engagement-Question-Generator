require('dotenv').config();
const mongoose = require('mongoose'); 


mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/googlebooks',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});


module.exports = mongoose.connection; 