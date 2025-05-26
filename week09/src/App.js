import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const isAuthenticated = false; // 인증 여부 (임시)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={isAuthenticated ? <h1>홈입니다</h1> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
