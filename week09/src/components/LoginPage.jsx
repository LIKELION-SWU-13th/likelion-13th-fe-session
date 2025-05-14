import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || pw.trim() === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    // 서버 없이 홈으로 이동
    navigate("/home");
  };

  return (
    <div className="login-container">
      <img
        className="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <div className="login-form">
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
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>

        <div className="login-divider">또는</div>
        <button className="code-login-button">로그인 코드 사용하기</button>

        <div className="options">
          <span className="fake-link">비밀번호를 잊으셨나요?</span>
          <label>
            <input type="checkbox" style={{ marginRight: "4px" }} />
            로그인 정보 저장
          </label>
        </div>

        <p className="signup-text">
          넷플릭스 회원이 아닌가요? <span className="fake-link">지금 가입하세요.</span>
        </p>

        <small className="captcha-info">
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.{" "}
          <span className="fake-link">자세히 알아보기.</span>
        </small>
      </div>
    </div>
  );
};

export default LoginPage;
