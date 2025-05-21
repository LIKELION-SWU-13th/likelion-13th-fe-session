import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchPopup from './SearchPopup.jsx';

function Navbar(){
    const [popup,setPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav>
            <div className="choose-container">
                <NavLink to="/" className="nav-btn">
                 <img src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg" alt="로고" className="logo"></img>
                </NavLink>
                <NavLink to="/drama" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                드라마
                </NavLink>
                <NavLink to="/entertainment" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                예능
                </NavLink>
                <NavLink to="/movie" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                영화    
                </NavLink>
                <NavLink to="/sports" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                스포츠
                </NavLink>
                <NavLink to="/animation" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                애니
                </NavLink>
                <NavLink to="/news" 
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                뉴스
                </NavLink>
                <NavLink to="/live" style={{marginRight:"1200px"}}
                className={({isActive})=>isActive? "nav-btn active":"nav-btn"}>
                라이브
                </NavLink>
                <div>
                <button onClick={()=>setPopup(true)} className="nav-btn">
                    <img src='https://www.tving.com/img/icon_search.svg' alt='search' className="icon"/>
                </button>

                {popup&& <SearchPopup onClose={()=>setPopup(false)}/> }
                </div>
                <button onMouseEnter={() => setIsOpen(true)} 
                onMouseLeave={()=>setIsOpen(false)}
                className="nav-btn profile">
                    <img src='https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100' alt='profile' className="icon"/>
                </button>
                {isOpen&&(
                <div className="profile-dropdown">
                 <p>마이페이지</p>
                 <p>설정</p>
                 <p>로그아웃</p>
                </div>
      )}
    
            </div>
            
        </nav>
    );
}

export default Navbar;