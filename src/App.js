import { Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import SignUpModal from "./pages/SignUpForm";
import SignedUpFinish from "./pages/SignedUpFinish";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup" element={<SignUpModal />} />
      <Route path="/registered" element={<SignedUpFinish />} />
    </Routes>
  );
}

export default App;
