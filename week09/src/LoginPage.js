import React, { useState } from 'react';
import { useAuth } from './components/AuthContext';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let isValid = true;
    
    // 이메일 필드 비어있는지 확인
    if (!email) {
      setEmailError('이메일을 입력하세요.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // 비밀번호 필드 비어있는지 확인
    if (!password) {
      setPasswordError('비밀번호를 입력하세요.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // 유효성 검사 통과하면 로그인 처리
    if (isValid) {
      login(); // 로그인 상태 변경
      navigate('/home'); // Home으로 이동
    }
  };

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onLogin={handleLogin}
      emailError={emailError} 
      passwordError={passwordError} 
    />
  );
}

export default LoginPage;
