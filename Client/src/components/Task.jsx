import React from "react";

const Task = ({ task, onUpdateStatus }) => {
  const handleMoveTask = async (newStatus) => {
    if (newStatus === "todo" && task.status === "in-progress") {
      onUpdateStatus(task.id, newStatus);
    } else if (newStatus === "in-progress" && task.status === "done") {
      onUpdateStatus(task.id, newStatus);
    } else if (newStatus === "done" && task.status === "todo") {
      onUpdateStatus(task.id, newStatus);
    } else {
      // Handle edge cases (e.g., task already in target state)
      console.warn(`Task ${task.id} cannot be moved to ${newStatus}`);
    }
  };
  return (
    <li key={task.id} className={`task ${task.status}`}>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <div className="task-actions">
        {task.status !== "todo" && (
          <button onClick={() => handleMoveTask("todo")}>Move to Todo</button>
        )}
        {task.status !== "in-progress" && (
          <button onClick={() => handleMoveTask("in-progress")}>Move to In Progress</button>
        )}
        {task.status !== "done" && (
          <button onClick={() => handleMoveTask("done")}>Move to Done</button>
        )}
      </div>
    </li>
  );
};

export default Task;
