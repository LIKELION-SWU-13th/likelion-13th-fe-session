import React,{useRef} from"react";
import './App.css';
function Form(){
  const id=useRef();
  const pw=useRef();

  const handleSubmit = () => {
    const enterId= id.current.value;
    const enterPw=pw.current.value;

    if(!enterId) 
    {<p style="red">정확한 이메일 주소나 전화번호를 입력하세요.</p>};
    if(!enterPw)
    {<p style="red">비밀번호는 4~60자 사이여야 합니다.</p>};
    /*실제 넷플릭스 화면처럼 뜨게 하고 싶은데, 아직 구현하지 못했다. 세션 전까지 완성해 볼게요!*/
    
    console.log("아이디: ", enterId);
    console.log("비밀번호: ",enterPw);

    
  };
  return(
    <div className="logincontain"> 
      <h2>로그인</h2>
      <input
       type="text"
       placeholder='이메일 주소 또는 휴대폰 번호'
       ref={id}/>
      <input
       type="text"
       placeholder='비밀번호'
       ref={pw}/>
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
  );
}

function App() {
  return (
    <div className="App">
      <div className="AppCover"></div>
       <header className="banner">
         <div className="logo"></div>
       </header>
       <main className="login">
         <Form/>
       </main>
      
    </div>
  );
}

export default App;
