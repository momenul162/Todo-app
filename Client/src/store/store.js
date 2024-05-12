import { createStore } from "easy-peasy";
import { taskModel } from "./store-model";

const store = createStore({
  tasks: taskModel,
});

export default store;
