import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "./Button";

const TaskItem = ({ id, title, completed, deleteTask, toggleBtn }) => {
  const deleteFunc = () => {
    if (confirm("Xoa?")) {
      deleteTask(id);
    }
  };

  const handleChangeCheck = () => {
    toggleBtn(id);
  };

  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onClick={handleChangeCheck}
        />
        <span className="task-title">{title}</span>
        <Button onClick={deleteFunc}>
          <AiOutlineDelete />
        </Button>
      </label>
    </li>
  );
};

export default TaskItem;
