export interface Task {
  _id: string;
  title: string;
  text: string;
  status: "todo" | "inprogress" | "done";
}
