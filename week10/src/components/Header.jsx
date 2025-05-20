import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import { ReactComponent as MainLogo } from "../images/mainLogo.svg";
import profile from "../images/profile.png";
import { ReactComponent as SearachLogo } from "../images/icon_search.svg";

function Header() {
  return (
    <div>
      <header className="headerObj">
        <div className="header-left-block">
          <Link to="/Home" className="mainLogo">
            <MainLogo />
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="https://www.tving.com/drama">드라마</a>
              </li>{/*페이지를 따로 안만들어서 a태그로 실제 사이트 이동*/}
              <li>
                <a href="https://www.tving.com/entertainment">예능</a>
              </li>
              <li>
                <a href="https://www.tving.com/movie">영화</a>
              </li>
              <li>
                <a href="https://www.tving.com/sports">스포츠</a>
              </li>
              <li>
                <a href="/animation">애니</a>
              </li>
              <li>
                <a href="/news">뉴스</a>
              </li>
              <li>
                <a href="/live">라이브</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <SearachLogo style={{width:'25px'}}/>
          <img className="profile" src={profile} alt="ProfileImage" />
        </div>
      </header>
    </div>
  );
}

export default React.memo(Header);
