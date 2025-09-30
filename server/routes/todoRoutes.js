import express from "express";
import {
  getTodoList,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todoListController.js";

const router = express.Router();

router.get("/todos", getTodoList);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
