import { useState } from "react";
import React from "react";
import { axios } from "../axios";
import "./AddQuestionForm.css";
import questionMark from "../images/questionMark.png";

const AddQuestionForm = () => {
  const [enteredQuestion, setEnteredQuestion] = useState({
    question: "",
  });

  const handleChange = (e) => {
    setEnteredQuestion({ question: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = { question: enteredQuestion.question };
    await axios
      .post("/questions/add", newQuestion)
      .catch((error) => console.log(error));

    console.log("New Question:", newQuestion);

    setEnteredQuestion({ question: "" });
  };

  return (
    <>
      <div className="card">
      <div className="heading">Add your own </div>
      <div className="heading2">icebreaker question!</div>
      </div>
      <div className="card">
      <div className="heading3">Got questions? </div>
      <div className="heading4">Please add one! </div>
      <div className="heading4">Keep it above the line!!</div>
      </div>

      <div className="container">
        
        <form className="container2" onSubmit={handleSubmit}>
        <img src={questionMark} alt='questionMark' height="200" width="200" className='questionMark'/>
          <input
            value={enteredQuestion.question}
            type="text"
            placeholder="Add a question"
            onChange={handleChange}
          />

          <button className="button2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddQuestionForm;
