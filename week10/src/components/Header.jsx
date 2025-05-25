import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo" />
        <nav className="menu">
          {/* 현재 페이지 색 구분시 현재 경로 감지를 위해 NavLink 사용 */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
          >
            홈
          </NavLink>
          <NavLink to="/series" className="navLink">
            시리즈
          </NavLink>
          <NavLink to="/movie" className="navLink">
            영화
          </NavLink>
          <NavLink to="/game" className="navLink">
            게임
          </NavLink>
          <NavLink to="/trending" className="navLink">
            NEW! 요즘 대세 콘텐츠
          </NavLink>
          <NavLink to="/mylist" className="navLink">
            내가 찜한 시리즈
          </NavLink>
          <NavLink to="/language" className="navLink">
            언어별로 찾아보기
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
export default Header;
