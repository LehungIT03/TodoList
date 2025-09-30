import { useEffect, useState } from "react";
import type { Task } from "../data";

function Home() {
  const [data, setData] = useState<Task[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const taskColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-blue-500";
      case "inprogress":
        return "bg-green-500";
      case "done":
        return "bg-gray-500 line-through";
      default:
        return "bg-blue-500";
    }
  };
  return (
    <div>
      {data.map((item) => (
        <div
          key={item._id}
          className={`p-4 m-2 rounded shadow ${taskColor(item.status)}`}
        >
          <ul className="flex justify-between list-none px-4 py-2 m-0 w-full">
            <li className="italic">
              <p className="font-bold">Todo</p>: {item.text}
            </li>
            <li className="italic">
              <p className="font-bold">Status</p>: {item.status}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Home;
