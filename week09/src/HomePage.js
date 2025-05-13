import React from 'react';
import { useAuth } from './components/AuthContext';
import './Login.css';

function HomePage() {
  const { logout } = useAuth();
  return (
    <div>
      <h2 style = {{ color: 'white' }}>홈 페이지</h2>
      <button className="button1" onClick={logout}>로그아웃</button>
    </div>
  );
}

export default HomePage;
