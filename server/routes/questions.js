const router = require('express').Router();
let Questions = require('../models/Questions');

router.route("/").get((req, res) => {
    Questions.find()
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {
    const question = req.body.question;

    const newQuestion = new Questions({question});

    newQuestion.save()
    .then(() => res.json("Your question is added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router; 