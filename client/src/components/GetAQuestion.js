import { useState } from 'react';
import React from 'react';
import { axios } from "../axios";

import './GetAQuestion.css'; 
import upArrow from '../images/upArrow.png'


const GetAQuestion = () => {
  const [question, setQuestion] = useState([]);

  const getQuestion = async () => {
    const response = await axios.get("/questions");
    try {
      setQuestion(
        response.data[Math.floor(Math.random(question) * response.data.length)]
      );
    } catch (error) {
      setQuestion({ error, isLoading: false });
    }

    console.log("Response: ", response);
  };

  return (
    <div className="container1">
      <button className="button1" onClick={getQuestion}>
        Get Question
      </button>
      <p className="questionElement">{question.question}</p>
      <img src={upArrow} alt="upArrow" height="200" width="200" />
      <div className="directions">
        {" "}
        Click button above to retrieve a random question
      </div>
    </div>
  );
};

export default GetAQuestion; 