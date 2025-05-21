import './Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // 이메일과 비밀번호 유효성 검사
    let isValid = true;

    if (!email) {
      alert("이메일을 입력하세요.");
      isValid = false;
    }

    if (!password) {
      alert("비밀번호를 입력하세요.");
      isValid = false;
    }

    // 유효성 검사를 통과하면 로그인 처리
    if (isValid) {
      login();
      navigate("/home"); // 홈 페이지로 이동
    }
  };

  return (
    <div className="login-box">
      <h2>로그인</h2>
      <input
        type="email"
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

      <button className="button1" onClick={handleLogin}>로그인</button>
      <p style={{ color: '#aaa', fontSize: '15px' }}>또는</p>
      <button className="button2">로그인 코드 사용하기</button>
      <p className="forget-text">비밀번호를 잊으셨나요?</p>
      <div className="options">
        <label>
          <input type="checkbox" /> 로그인 정보 저장
        </label>
        <div className="option-text">넷플릭스 회원이 아닌가요?
            <span className="join-text"> 지금 가입하세요.</span>
        </div>
        <p style={{ color: '#aaa', marginTop: '17px', fontSize: '12px', textAlign: 'left' }}>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
        <p style={{ color: '#3296FF', marginTop: '1px', fontSize: '12px', textDecoration: 'underline'}}>자세히 알아보기</p>
      </div>
    </div>
  );
}

export default Login;
