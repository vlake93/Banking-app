<<<<<<< HEAD
import Header from "./components/UI/Header";
import Hero from "./components/UI/Hero";
import SignUp from "./components/UI/SignUp";
import Download from "./components/UI/Download";
import Footer from "./components/UI/Footer";
import SignUpModal from "./components/Modals/SignUpModal";
import Sidebar from "./components/Sidebar/Sidebar";
=======
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import SignUpModal from "./pages/SignUpForm";
>>>>>>> 41570ddcc28a1223305648b93b8b67d5ca3ca18b
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/user" element={<User></User>} />
      <Route path="/admin" element={<Admin></Admin>} />
      <Route path="/signup" element={<SignUpModal></SignUpModal>} />
    </Routes>
  );
}

export default App;
