import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";

const TaskFrom = () => {
  const { postTasks } = useStoreActions((actions) => actions.tasks);

  const handleTask = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const state = form.state.value;

    postTasks({ title, description, state });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4 ">Add To Task!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body bg-slate-100 rounded-lg" onSubmit={handleTask}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="title"
                name="title"
                placeholder="title"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="description"
                name="description"
                placeholder="description"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <select name="state" className="select select-bordered w-full bg-white">
                <option disabled defaultValue="">
                  Select one
                </option>
                <option value="Todo">Todo</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-outline btn-primary text-2xl">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskFrom;
