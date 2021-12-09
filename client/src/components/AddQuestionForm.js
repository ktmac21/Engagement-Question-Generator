import { useState } from 'react';
import React from 'react';
import { axios } from "../axios";
import './AddQuestionForm.css';


const AddQuestionForm = () => {
  const [enteredQuestion, setEnteredQuestion] = useState({
    question: ""
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
    <div className="container">
    <form className='container2' onSubmit={handleSubmit}>
      <div>Add an engagement question!</div>
          <input 
          value={enteredQuestion.question}
          type="text"
          placeholder="Add a question"
          onChange={handleChange}
          />
      
      <button className='button' type="submit">Submit</button>
    </form>
    
    </div>
  );
};

export default AddQuestionForm; 