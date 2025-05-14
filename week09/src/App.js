import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const Home = () => (
  <div style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
    <h1>홈페이지입니다</h1>
    <p>로그인에 성공했습니다 🎉</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div style={{ color: "white" }}>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
