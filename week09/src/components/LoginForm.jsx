import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoginInput from "./LoginInput";


function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 정답 조건 
  const VALID_EMAIL = "kimybin@swu.ac.kr";
  const VALID_PASSWORD = "yubin";

  const handleSubmit = (e) => {
    e.preventDefault();

    // 정답 검증
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login();             // 인증 상태 변경
      navigate("/home");   // 홈으로 이동
    } else {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
      navigate("/login");  // 로그인 페이지로 다시 이동
    }
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <LoginInput 
        type="email" 
        placeholder="이메일 주소 또는 휴대폰 번호"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput 
        type="password" 
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login_button" type="submit">로그인</button>
      <div className="or"><p>또는</p></div>
      <button className="login_button_help" type="button">로그인 코드 사용하기</button>
      
      <div className="login_option">
        <label className="login_remember">
          <input type="checkbox" /> 로그인 정보 저장
        </label>
      </div>
    </form>
  );
}

export default LoginForm;
