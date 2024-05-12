import { action, useStoreActions } from "easy-peasy";
import React from "react";

const TaskList = ({ tasks }) => {
  const { updateTask } = useStoreActions((actions) => actions.tasks);

  const handleUpdate = (task) => {
    if (task.state === "Todo") {
      task.state = "In-Progress";
      updateTask(task);
    } else if (task.state === "In-Progress") {
      task.state = "Done";
      updateTask(task);
    }
  };

  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-3xl">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {tasks &&
            tasks.map((task, index) => (
              <tr key={task._id} className="text-xl">
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td className="cursor-pointer">
                  <button
                    onClick={() => handleUpdate(task)}
                    className={`btn btn-sm btn-outline ${task.state === "Todo" && "btn-primary"}
                    ${task.state === "In-Progress" && "btn-info"}
                    ${task.state === "Done" && "btn-success"}`}
                  >
                    {task.state}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
