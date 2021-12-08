const db = require('../config/connection');
const Questions = require('../models/Questions')

const questionsData = require('./questionsData.json');

db.once('open', async () => {
    await Questions.deleteMany();
  
    const questionsList = await Questions.insertMany(questionsData);
  
    console.log('questionsList is seeded!');
    process.exit(0);
  });

    


