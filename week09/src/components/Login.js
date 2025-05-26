import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 (예: API 호출)
    console.log({ email, password, remember });
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Netflix" className="login-logo" />
      <div className="login-overlay">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>로그인</h1>
          <input
            type="text"
            placeholder="이메일 주소 또는 휴대폰 번호"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">로그인</button>
          <div className="login-divider">또는</div>
          <button type="button" className="code-button">로그인 코드 사용하기</button>
          <a href="/loginHelp" className="forgot">비밀번호를 잊으셨나요?</a>
          <label className="remember">
            <span>로그인 정보 저장</span>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
           
          </label>
          <div className="signup">넷플릭스 회원이 아닌가요? <a href="/">지금 가입하세요.</a></div>
          <div className="recaptcha">이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <a href="#">자세히 알아보기.</a></div>
        </form>
      </div>
    </div>
  );
}
