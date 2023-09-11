import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "./Button";

const TaskItem = ({ id, title, completed, xyz, onToggle }) => {
  const handleDelete = () => {
    xyz(id);
  };

  const handleChange = () => {
    onToggle(id, !completed);
  };

  return (
    <li className="task-item">
      <label>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span className="task-title">{title}</span>
        <Button onClick={handleDelete}>
          <AiOutlineDelete />
        </Button>
      </label>
    </li>
  );
};

export default TaskItem;
