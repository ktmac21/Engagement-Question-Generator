import { useState, useEffect } from 'react';
import React from 'react'
import { axios } from "../axios"
import './GetQuestionBtn.css'


const GetQuestionBtn = () => {
  const [question, setQuestion] = useState([]);
  
  const getQuestion = async () => {
    const response = await axios
      .get("/questions")
      .catch((err) => console.log(err));

    console.log("Response: ", response);

    if (response && response.data)
      setQuestion(
        response.data[Math.floor(Math.random(question) * response.data.length)]
      );
  };

  // useEffect(() => {
    
  //   getQuestion();
  // }, []);

  return (
    <div className="container">
      <button className="button" onClick={getQuestion}>
        Get Question
      </button>
      <div >
        {question.question}
        </div>
        </div>
    
  );
};
        

export default GetQuestionBtn; 