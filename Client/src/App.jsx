import TaskFrom from "./components/TaskFrom";
import TaskTab from "./components/TaskTab";

const App = () => {
  return (
    <div className="text-right container mx-auto">
      <h1 className="text-5xl text-indigo-600 text-center my-4">Todo App</h1>
      <button
        className="btn btn-wide btn-outline btn-primary text-2xl my-10"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add Task
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-screen-lg mx bg-slate-200">
          <TaskFrom />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <TaskTab />
    </div>
  );
};

export default App;
