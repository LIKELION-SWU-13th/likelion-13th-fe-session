import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo" src="logo.png"></Link>
            <img className="logo_img" src="logo.png" />
            <nav>
                <Link to="/entertainment">에능</Link>
                <Link to="/drama">드라마</Link>
                <Link to="/movie">영화</Link>
                <Link to="/animation">애니</Link>
                <Link to="/series">해외시리즈</Link>
                <Link to="/culture">시사교양</Link>
                <Link to="/kids">키즈</Link>
                <Link to="/movieplus">영화플러스</Link>
                <Link to="/live">LIVE</Link>
            </nav>
        </header>
    );
}

export default Header;