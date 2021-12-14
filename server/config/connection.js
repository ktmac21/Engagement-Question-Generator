const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/engagement',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection; 