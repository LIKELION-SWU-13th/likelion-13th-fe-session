//앱 전체 구조, 라우터
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router, Routes, Route : 페이지 이동 기능
import Home from './Home';
import History from './History';
// Home, History : 각각의 페이지 컴포넌트
import { DiaryProvider } from './DiaryProvider';
// 일기 저장/ 관리하는 Context Provider

function App() {
  return (
    <DiaryProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<History detailMode={true} />} />
        </Routes>
      </Router>
    </DiaryProvider>
  );
}
// App 컴포넌트는 
// - DiaryProvider로 전역 저장소를 감싸고
// - Router로 페이지 이동 기능 제공

// 각각 URL에 따라 다른 컴포넌트 보여줌
// '/' Home
// '/history' History (목록)
// '/detail/:id' History (상세보기 모드)

export default App;
