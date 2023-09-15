import React from "react";
import TaskItem from "./TaskItem";
import { useTodo } from "../hooks/useTodo";

const TaskList = () => {
  const { tasks } = useTodo();
  const isEmpty = tasks.length === 0;

  if (isEmpty)
    return (
      <ul className="task-list">
        <li className="task-empty">Nothing here</li>
      </ul>
    );

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
