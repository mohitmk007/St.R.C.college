
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Home from "./componenst/Home/Home";
import Api from "./componenst/Api/Api";
import Todo from "./componenst/Todo/Todo";
import Navbar from "./componenst/Navbar/Navbar";

const App = () => {
  return (
    <Router>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/api" element={<Api></Api>} />
        <Route path="/todo" element={<Todo></Todo>} />
      </Routes>
    </Router>
  );
};

export default App;
