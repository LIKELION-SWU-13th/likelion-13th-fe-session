import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login({ onLogin }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/home';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pw) {
      onLogin(id);
      navigate(from, { replace: true });
    } else {
      alert('비밀번호를 입력하세요.');
    }
  };

  return (
    <div className="App">
      <div className="AppCover"></div>
       <header className="banner">
         <div className="logo"></div>
       </header>
       <main className="login">
          <div className="logincontain"> 
    <h2>로그인</h2>
    <input
     type="text"
     placeholder='이메일 주소 또는 휴대폰 번호'
     value={id}
     onChange={(e) => setId(e.target.value)}/>
    <input
     type="text"
     placeholder='비밀번호'
     value={pw}
     onChange={(e) => setPw(e.target.value)}/>

    <button className="button1" onClick={handleSubmit}>로그인</button> 
    <p style={{ textAlign: 'center' }}>또는</p>
    <button className="button2">로그인 코드 사용하기</button>
    <button className="button3">비밀번호를 잊으셨나요?</button>

    <div className="saveBox">
      <input id="idsave" type="checkbox"/>
      <label for="idsave">로그인 정보 저장</label>
    </div>

    <div className="textBox">
      <p>넷플릭스 회원이 아닌가요?</p>
      <button className="button4">지금 가입하세요.</button>
    </div>

    <p className="notRobot">이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
    <button className="button5">자세히 알아보기.</button>
  </div>
       </main>
      
    </div>
  );
}

export default Login;
