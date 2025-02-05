import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import Register from "./LoginPage/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
