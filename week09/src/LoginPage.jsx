import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === "chaebin" && password === "0420") {
      navigate("/Home");
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="logo"></div>
        <div className="container">
          <h1>로그인</h1>
          <input
            id="id"
            type="text"
            placeholder="이메일 주소 또는 휴대폰 번호"
            className="form"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            id="password"
            type="text"
            placeholder="비밀번호"
            className="form"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error">{error}</div>
          <button type="submit" className="loginBtn" onClick={handleSubmit}>
            로그인
          </button>
          <p style={{ color: "#bbbbbb", textAlign: "center" }}> 또는 </p>
          <button className="codeBtn">로그인코드 사용하기</button>
          <div className="forgot">비밀번호를 잊으셨나요?</div>
          <div className="checkboxWrap">
            <input type="checkbox" id="save" />
            <label htmlFor="save" className="customCheckbox"></label>
            <label htmlFor="save" style={{ color: "white" }}>
              로그인 정보 저장
            </label>
          </div>
          <div className="signUp">
            넷플릭스 회원이 아닌가요?<span> 지금 가입하세요.</span>
          </div>
          <div className="checkRobot">
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </div>
          <div className="learnMore">자세히 알아보기.</div>
        </div>
      </div>
    </>
  );
};

export default Login;
