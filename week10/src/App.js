import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //React Router를 사용하여 페이지 라우팅
import Header from './components/Header'; //헤더 컴포넌트
import Home from './pages/Home'; //홈 페이지
import Entertainment from './pages/Entertainment'; //예능페이지
import Drama from './pages/Drama'; 
import Movie from './pages/Movie';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Router> {/*라우팅을 위한 Router 설정*/}
      <Header /> {/*항상 표시되는 헤더*/}
      <Routes> {/*페이지에 따라 보여줄 컴포넌트 설정*/}
        <Route path="/" element={<Home />} /> {/*루트 주소일 때 Home 컴포넌트 렌더*/}
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;