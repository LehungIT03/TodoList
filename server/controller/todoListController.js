import TodoModels from "../models/todoModels.js";

export async function getTodoList(req, res) {
  try {
    const todos = await TodoModels.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTodo(req, res) {
  try {
    const { title, text, status } = req.body;
    const newTodo = new TodoModels({ title, text, status });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const updateTodo = await TodoModels.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    await TodoModels.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
