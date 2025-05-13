//앱 시작점
import React from 'react'; //React 기본 패키지 불러오기
import ReactDOM from 'react-dom/client';
import App from './App';  // App 컴포넌트 불러오기
import './index.css';

// HTML의 <div id="root"></div> 부분에 React 앱을 연결할 준비함
const root = ReactDOM.createRoot(document.getElementById('root')); 
// <App />을 실행시켜서 브라우저에 보여준다
//StrictMode는 개발용 경고를 좀 더 잘 보여주는 모드
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);