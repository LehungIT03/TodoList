import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./taskcard";
import type { Task } from "../../data";
interface ColumnProps {
  id: "todo" | "inprogress" | "done";
  title: string;
  tasks: Task[];
}
function Column({ id, title, tasks }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });
  return (
    <div
      ref={setNodeRef}
      className={`flex-1 p-4 m-2 bg-gray-400 rounded shadow transition`}
      style={{ backgroundColor: isOver ? "lightblue" : undefined }}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default Column;
