require('dotenv').config();
const mongoose = require('mongoose'); 


mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/engagement',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log("Database connected"))
.catch(err => console.log( err ));


module.exports = mongoose.connection; 