import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/user" element={<User></User>} />
      <Route path="/admin" element={<Admin></Admin>} />
    </Routes>
  );
}

export default App;
