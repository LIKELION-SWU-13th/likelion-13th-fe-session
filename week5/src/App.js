import React from "react";
import './App.css';
import NoticeBox from "./NoticeBox";

function App() {
  return (
    <div className = "app">
        <h2>공지사항</h2>

        <NoticeBox title="시스템 점검 안내" content="4월 1일 00시부터 서비스 점검이 진행됩니다."/>
        <NoticeBox title="기능 추가 안내" content="파일 업로드 기능이 추가되었습니다." highlight/>
    </div>
  )
}
export default App;
