import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks = [], deleteTask, toggleBtn }) => {
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
        <TaskItem
          key={task.id}
          {...task}
          deleteTask={deleteTask}
          toggleBtn={toggleBtn}
        />
      ))}
    </ul>
  );
};

export default TaskList;
