const express = require("express");
const cors = require("cors");
const connectToDb = require("./db");
const Task = require("./models/task");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to my Todo App");
});

app.patch("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { state, _id } = req.body;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ error: true, message: "task not found" });
    }

    task.state = state ?? task.state;

    await task.save();
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Something went wrong", error });
  }
});

app.get("/tasks", async (_req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Something went wrong" });
  }
});

app.post("/tasks", async (req, res) => {
  const { title, description, state } = req.body;

  if (!title || !description || !state) {
    return res.status(400).json({ error: true, message: "Please provide required data" });
  }

  try {
    const newTask = new Task({ title, description, state });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Something went wrong" });
  }
});

connectToDb("mongodb://0.0.0.0:27017/todo_app")
  .then(() => {
    console.log("Database connect with server");
    app.listen(5000, () => {
      console.log("This server is listening on port: 5000");
    });
  })
  .catch((e) => console.log(e));
