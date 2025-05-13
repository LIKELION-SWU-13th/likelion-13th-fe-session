import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import LoginPage from "./components/LoginPage";
import FooterPage from "./components/FooterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function HomePage() {
  return <div><h1>홈에 오신 것을 환영합니다!</h1></div>;
}

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
