import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import netflixLogo from '../assets/Netflix_Logo_CMYK.png';
import backgroundImage from '../assets/netflixBackgroundjpg.jpg';

function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError('올바른 이메일 주소를 입력하세요.');
      return;
    }
    setEmailError('');
    if (password) {
      setIsLoggedIn(true);
      navigate('/home');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* 불투명한 검정색 배경*/}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1
      }} />

      {/* 넷플릭스 로고 */}
      <img src={netflixLogo} alt="Netflix Logo" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '150px',
        zIndex: 2
      }} />

      {/* 로그인 박스*/}
      <div style={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: '60px 68px 40px',
        borderRadius: '4px',
        width: '320px',
        margin: '0 auto',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#fff'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '28px' }}>로그인</h2>

        <input
          type="email"
          placeholder="이메일 주소 또는 휴대폰 번호"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        {emailError && (
          <div style={{ color: '#e87c03', fontSize: '13px', marginBottom: '12px' }}>
            {emailError}
          </div>
        )}

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={loginButtonStyle}>로그인</button>

        <div style={{ textAlign: 'center', margin: '10px 0', color: '#737373' }}>또는</div>
        <button style={codeButtonStyle}>로그인 코드 사용하기</button>

        <div style={{ marginTop: '16px' }}>
          <a href="#" style={linkStyle}>비밀번호를 잊으셨나요?</a>
        </div>

        <div style={{ marginTop: '12px' }}>
          <label style={{ fontSize: '13px' }}>
            <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
            로그인 정보 저장
          </label>
        </div>

        <div style={{ fontSize: '14px', color: '#737373', marginTop: '30px' }}>
          넷플릭스 회원이 아닌가요? <a href="#" style={linkStyle}>지금 가입하세요.</a>
        </div>

        <p style={{ marginTop: '16px', fontSize: '11px', color: '#8c8c8c' }}>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
          <a href="#" style={{ color: '#0071eb' }}> 자세히 알아보기.</a>
        </p>
      </div>

      {/* 푸터 */}
      <div style={{
        backgroundColor: 'black',
        color: '#757575',
        fontSize: '13px',
        padding: '40px 20px',
        zIndex: 2,
        position: 'relative'
      }}>
        <p style={{ marginBottom: '20px' }}>
          질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)(무료 전화)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          <a href="#" style={footerLinkStyle}>자주 묻는 질문</a>
          <a href="#" style={footerLinkStyle}>고객 센터</a>
          <a href="#" style={footerLinkStyle}>이용 약관</a>
          <a href="#" style={footerLinkStyle}>개인정보 처리방침</a>
          <a href="#" style={footerLinkStyle}>쿠키 설정</a>
          <a href="#" style={footerLinkStyle}>기업 정보</a>
        </div>
        <select style={{
          backgroundColor: '#000',
          color: '#757575',
          border: '1px solid #333',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <option>한국어</option>
          <option>English</option>
        </select>
        <div>
          <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
          <p>대표: 레지널드 숀 톰슨</p>
          <p>이메일 주소: korea@netflix.com</p>
          <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
          <p>사업자등록번호: 165-87-00119</p>
          <p>클라우드 호스팅: Amazon Web Services Inc.</p>
          <p>공정거래위원회 웹사이트</p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#333',
  border: 'none',
  padding: '16px',
  marginBottom: '16px',
  width: '100%',
  borderRadius: '4px',
  color: '#fff'
};

const loginButtonStyle = {
  backgroundColor: '#e50914',
  border: 'none',
  padding: '16px',
  width: '100%',
  borderRadius: '4px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
};

const codeButtonStyle = {
  backgroundColor: '#333',
  border: 'none',
  padding: '12px',
  width: '100%',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '14px',
  cursor: 'pointer'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

const footerLinkStyle = {
  color: '#757575',
  textDecoration: 'underline',
  fontSize: '13px'
};

export default LoginPage;
