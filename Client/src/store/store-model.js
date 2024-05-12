import axios from "axios";
import { action, thunk } from "easy-peasy";

export const taskModel = {
  tasks: [],

  setTasks: action((state, payload) => {
    state.tasks = payload;
  }),
  addTasks: action((state, payload) => {
    state.tasks.push(payload);
  }),

  fetchTasks: thunk(async (actions) => {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      actions.setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  }),

  updateTask: thunk(async (actions, payload) => {
    try {
      const res = await axios.patch(`http://localhost:5000/tasks/${payload?._id}`, payload);

      if (res.data) {
        actions.fetchTasks();
      }
    } catch (error) {
      console.error("Error updating task", error);
    }
  }),

  postTasks: thunk(async (actions, payload) => {
    try {
      const res = await axios.post("http://localhost:5000/tasks", payload);

      actions.addTasks(res.data);
    } catch (error) {
      console.error("Error posting task", error);
    }
  }),
};
