import mongoose from "mongoose";

// Tạo schema cho Todo
function createTodoSchema() {
  return new mongoose.Schema(
    {
      title: { type: String, required: true },
      text: { type: String, required: true },
      status: { type: String, required: true },
    },
    { collection: "todolist" }
  );
}

// Tạo model (tránh trùng tên khi reload)
const TodoModels =
  mongoose.models.TodoModels ||
  mongoose.model("TodoModels", createTodoSchema());

export default TodoModels;
