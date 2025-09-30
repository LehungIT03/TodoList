import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./homePage";
import TodoList from "./component/todoList";
import Header from "./common/layout/header";
import Footer from "./common/layout/footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
