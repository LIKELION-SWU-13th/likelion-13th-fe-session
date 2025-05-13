import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "./Login.css";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showEmailError, setShowEmailError] = useState(false); //첫 초기화화면에는 로그인-이메일 인풋에 에러메시지 출력안하기위함.

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password.length >= 4 && password.length <= 60) {
      login();
      navigate("/home");
    } else {
      alert("이메일과 비밀번호를 올바르게 입력하세요.");
    }
  };

  return (
    <div className="main-bg ">
      <div className="overlay"></div>
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>로그인</h2>
          {/*login-email or 번호*/}
          <input
            type="text"
            placeholder="이메일 주소 또는 휴대폰 번호"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShowEmailError(true);
            }}
          />
          <p className="error">
            {showEmailError &&
              !email &&
              "⊗ 정확한 이메일 주소나 전화번호를 입력하세요."}
          </p>
          
          {/*로그인-비밀번호*/}
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">
            {password && (password.length < 4 || password.length > 60)
              ? "⊗ 비밀번호는 4~60자 사이여야 합니다."
              : ""}
          </p>
          <button type="submit">로그인</button>
          <p className="centerAlign"> 또는 </p>
          <button
            type="submit"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15" }}
          >
            로그인 코드 사용하기
          </button>
          <a className="centerAlign" href="https://www.netflix.com/kr/loginHelp">
            비밀번호를 잊으셨나요?
          </a>

          <div>
            <label>
              <input type="checkbox"/>{""} 로그인 정보 저장
            </label>
          </div>
          <p>
            넷플릭스 회원이 아닌가요? {""}
            <a href="https://www.netflix.com/kr/" style={{textDecorationLine:'none'}}>지금 가입하세요.</a>
          </p>
          <p style={{ fontSize: "12px" }}>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 <br />
            로봇이 아님을 확인합니다.
          </p>
          <a href="https://www.netflix.com/kr/" style={{fontSize: "12px", color: '#448EF4'}}>자세히 알아보기</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
