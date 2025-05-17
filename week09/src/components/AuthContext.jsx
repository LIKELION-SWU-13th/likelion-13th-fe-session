import React, { createContext, useState, useContext } from "react";

// 인증 상태를 위한 Context 객체 생성
const AuthContext = createContext();

// 인증 Context를 외부에 제공하는 Provider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
  // 인증 상태를 저장하는 state임. 초기값은 false로 로그아웃 상태
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // Context 내부에서 사용할 value 설정하여 상태, 제어 함수들 전달
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 훅
export const useAuth = () => useContext(AuthContext);
