import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { axios } from "../axios"
import { Form, Button } from 'react-bootstrap';

const AddQuestionForm = () => {
  const [addQuestion, setAddQuestion] = useState({ question: "" });
  

  const handleChange = (e) => {
    setAddQuestion({ question: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = { question: addQuestion.question };
    await axios.post("/questions/add", newQuestion).catch((error) => console.log(error))
    

    console.log("New Question:", newQuestion);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add an engagement question!</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add a question"
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Add question</Button>
    </Form>
  );
};

export default AddQuestionForm; 