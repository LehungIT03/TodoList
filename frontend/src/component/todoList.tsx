import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import type { Task } from "../data";
import Column from "../common/common/column";
function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const handleDragEnd = async (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) {
      return;
    }
    const taskId = active.id.toString();
    const newStatus = over.id.toString();
    const currentTask = tasks.find((t) => t._id === taskId);
    if (!currentTask || currentTask.status === newStatus) return;
    setTasks((prev) =>
      prev.map((t) =>
        t._id === taskId ? { ...t, status: newStatus as Task["status"] } : t
      )
    );
    try {
      await fetch(`http://localhost:5000/api/todos/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        <Column
          id="todo"
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
        />

        <Column
          id="inprogress"
          title="in Progress"
          tasks={tasks.filter((t) => t.status === "inprogress")}
        />

        <Column
          id="done"
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
        />
      </div>
    </DndContext>
  );
}
export default TodoList;
