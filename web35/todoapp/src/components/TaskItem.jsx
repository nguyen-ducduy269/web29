import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "./Button";
import { useTodo } from "../hooks/useTodo";

const TaskItem = ({ id, completed, title }) => {
  const deleteTask = useTodo().deleteTask;
  const toggle = useTodo().toggle;
  const handleDelete = () => {
    deleteTask(id);
  };

  const handleChange = () => {
    toggle(id, !completed);
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
