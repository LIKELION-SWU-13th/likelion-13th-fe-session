import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; 
import "./LoginPage.css";

function LoginPage() {
    const { setIsLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !pw) {
            alert("이메일과 비밀번호를 입력해주세요!");
            return;
        }
         setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home"); 
    
    };

    return (
        <div className="login-wrapper">
            <div className="login-container" style={{
                backgroundImage: `url("/background.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                    className="netflix-logo"
                />
                <div className="login-box">
                    <span className="login-text">로그인</span>
                    <input
                        className="login-input"
                        type="text"
                        placeholder="이메일 주소 또는 휴대폰 번호"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="login-input"
                        type="password"
                        placeholder="비밀번호"
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <button className="login-button" onClick={handleLogin}>
                        로그인
                    </button>
                    <div className="divider">또는</div>
                    <button className="code-login">로그인 코드 사용하기</button>
                    <p className="forgot">비밀번호를 잊으셨나요?</p>
                    <div className="save-info">
                        <input type="checkbox" />
                        <span>로그인 정보 저장</span>
                    </div>
                    <p className="join">
                        넷플릭스 회원이 아니신가요? <strong>지금 가입하세요.</strong>
                    </p>
                    <p className="captcha-info">
                        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가
                        <br />
                        로봇이 아님을 확인합니다.
                    </p>
                    <a className="learn-more" href="#">자세히 알아보기.</a>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-contact">
                    <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담) (무료 전화)</p>
                </div>
                <ul className="footer-links">
                    <li><a href="#">자주 묻는 질문</a></li>
                    <li><a href="#">고객 센터</a></li>
                    <li><a href="#">이용 약관</a></li>
                    <li><a href="#">개인정보 처리방침</a></li>
                    <li><a href="#">쿠키 설정</a></li>
                    <li><a href="#">기업 정보</a></li>
                </ul>
                <div className="footer-language">
                    <select>
                        <option>한국어</option>
                        <option>English</option>
                    </select>
                </div>
                <div className="footer-bottom">
                    <p>
                        넷플릭스서비시스코리아 유한회사 통신판매업신고: 제2018-서울종로-0426호 전화번호: 00-308-321-0161(수신자 부담)<br />
                        대표: 레지널드 손 톰슨<br />
                        이메일 주소: korea@netflix.com<br />
                        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br />
                        사업자등록번호: 165-87-00119<br />
                        클라우드 호스팅: Amazon Web Services Inc.<br />
                        공정거래위원회 웹사이트
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LoginPage;
