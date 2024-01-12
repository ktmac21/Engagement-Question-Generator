import { useState } from "react";
import React from "react";
import axios from "axios";
import "./AddQuestionForm.css";
import upArrow from "../images/upArrow.png";

const AddQuestionForm = () => {
  const [enteredQuestion, setEnteredQuestion] = useState({
    question: "",
  });

  const handleChange = (e) => {
    setEnteredQuestion({ question: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = await { question: enteredQuestion.question };
     axios.post('http://localhost:5555/question/add', newQuestion);

    try {
      setEnteredQuestion({ question: "" });
    } catch (error) {
      setEnteredQuestion({ error, isLoading: false });
    }

    console.log("New Question:", newQuestion);
  };

  return (
    <>
      <div className="card">
        <div className="heading">Add your own </div>
        <div className="heading2">icebreaker question</div>
      </div>

      <div className="container">
        <form className="container2" onSubmit={handleSubmit}>
          <input
            value={enteredQuestion.question}
            type="text"
            placeholder="add your queston"
            onChange={handleChange}
          />

          <button className="button2" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="card">
        <div className="heading3">Got questions? </div>
        <div className="heading4">Please add one... </div>
        <div className="heading5">Keep it above the line!</div>
        <img
          className="arrow"
          src={upArrow}
          alt="upArrow"
          height="50"
          width="50"
        />
      </div>
    </>
  );
};

export default AddQuestionForm;
