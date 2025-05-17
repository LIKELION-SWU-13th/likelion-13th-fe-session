import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./context/AuthContext";  // 로그인 상태 확인
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(AuthContext);  // 로그인 상태를 가져옵니다.

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />} />
      <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;