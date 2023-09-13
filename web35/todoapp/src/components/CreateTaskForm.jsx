import React, { useState } from "react";
import Button from "./Button";
import { useTodo } from "../hooks/useTodo";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const addTask = useTodo().addTask;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form action="" className="create-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={title}
        onChange={handleChange}
      />
      <Button variant="primary">Create</Button>
    </form>
  );
};

export default CreateTaskForm;
