const mongoose = require('mongoose'); 

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/engagement',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = mongoose.connection; 