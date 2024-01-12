import { Questions } from "../models/Questions.js";
import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const questions = await Questions.find();
        return res.status(200).json(questions);
    }catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
    
   
});

router.post("/add", async (req, res) => {
  try {
    const newQuestion = new Questions(req.body);
    await newQuestion.save();
    res.status(201).send(newQuestion);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default router;

