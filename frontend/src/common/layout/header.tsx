import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="h-16 flex text-white items-center bg-gray-800 border-gray-500 border-b-2 px-8 ">
      <ul className="">
        <Link to={"/"} className="inline p-4 font-semibold">
          Home
        </Link>
        <Link to={"/todo"} className="inline p-4 font-semibold">
          Todo List
        </Link>
        <Link to={"/add"} className="inline p-4 font-semibold">
          Add Todo
        </Link>
      </ul>
      <ul className="ml-auto">
        <li className="inline p-4 font-semibold">Login</li>
        <li className="inline p-4 font-semibold">Register</li>
      </ul>
    </div>
  );
}
export default Header;
