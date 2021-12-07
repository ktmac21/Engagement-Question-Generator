import { useState } from 'react';
import React from 'react'
import { axios } from "../axios"


const AddQuestionForm = () => {
  const [enteredQuestion, setEnteredQuestion] = useState({
    question: ''
  });
  

  const handleChange = (e) => {
    setEnteredQuestion({ question: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = { question: enteredQuestion.question };
    await axios.post("/questions/add", newQuestion).catch((error) => console.log(error))
    

    console.log("New Question:", newQuestion);

    setEnteredQuestion({ question: ""})
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Add an engagement question!
          <input 
          value={enteredQuestion.question}
          type="text"
          placeholder="Add a question"
          onChange={handleChange}
          />
      </div>
      <button type="submit">Add question</button>
    </form>
  );
};

export default AddQuestionForm; 