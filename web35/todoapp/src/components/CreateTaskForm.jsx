import React, { useState } from "react";
import Button from "./Button";

const CreateTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <form action="" className="create-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button variant="primary">Create</Button>
    </form>
  );
};

export default CreateTaskForm;
