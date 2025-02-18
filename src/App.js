import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import TestPage from "./TestPage/test.page";
import RegisterPage from "./pages/register/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalysisPage from "./pages/analysis/AnalysisPage";

// 로그인 페이지는 Header, Footer를 App.js에서 사용
// 회원가입 페이지는 Header, Footer를 페이지 내(RegisterPage)에서 사용
// 페이지 내에서 사용했을 때 Footer를 바닥에 고정시켰음(flex를 세로로 정렬시켜 justify-content: space-between 사용)

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
