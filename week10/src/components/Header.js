import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; //페이지 이동을 위한 hook과 컴포넌트
import './Header.css'; //스타일 파일

function Header() {
  const navigate = useNavigate(); //로고 클릭 시 이동을 위한 함수
  return (
    <header className="header"> {/*헤더 컨테이너*/}
      <div className="logo" onClick={() => navigate('/')}>
       <img src="/images/wv.svg" alt="logo" className="logo img" /> 
      </div> {/*로고 클릭 시 홈으로 이동*/}
      <nav className="nav"> {/*네비게이션 메뉴 */}
        <Link to="/entertainment">예능</Link>
        <Link to="/drama">드라마</Link>
        <Link to="/movie">영화</Link>
      </nav>
    </header>
  );
}

export default Header;