import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../../data";
interface TaskCardProps {
  task: Task;
}
function TaskCard({ task }: TaskCardProps) {
  //* su dung draggable de keo tha the task
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id.toString(),
  });
  const colorTask = () => {
    switch (task.status) {
      case "todo":
        return "bg-blue-500";
      case "inprogress":
        return "bg-green-500";
      case "done":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };
  //* gan style de keo tha
  const style: React.CSSProperties | undefined = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    //* su dung ref, style, listeners, attributes de keo tha
    //* ref de dang ky element voi dnd kit
    //* style de cap nhat vi tri khi keo tha
    //* listeners de lang nghe su kien keo tha
    //* attributes de them cac thuoc tinh can thiet cho element

    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`p-4 m-2 rounded shadow cursor-gab ${colorTask()}`}
    >
      {task.text}
    </button>
  );
}

export default TaskCard;
