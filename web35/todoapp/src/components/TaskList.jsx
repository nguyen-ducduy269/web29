import React from "react";
import TaskItem from "./TaskItem";
import { useTodo } from "../hooks/useTodo";

const TaskList = () => {
  const filteredTasks = useTodo().filteredTasks;
  const isEmpty = filteredTasks.length === 0;

  if (isEmpty)
    return (
      <ul className="task-list">
        <li className="task-empty">Nothing here</li>
      </ul>
    );

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
