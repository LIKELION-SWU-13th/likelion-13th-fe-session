import React from "react";
import "../styles/Header.css";

const navItems = [
  "예능", "드라마", "영화", "애니", "해외시리즈", "시사교양", "키즈", "영화플러스", "LIVE"
];

function Header() {
  return (
    <header className="header">
      <div className="logo">wavve</div>
      <nav className="nav">
        {navItems.map(item => (
          <a href="#" key={item} className="nav-item">{item}</a>
        ))}
      </nav>
      <div className="header-icons">
        <button className="icon-btn" aria-label="검색">🔍</button>
        <button className="icon-btn" aria-label="마이페이지">👤</button>
      </div>
    </header>
  );
}

export default Header;
