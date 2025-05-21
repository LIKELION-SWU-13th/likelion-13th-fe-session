import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser } from 'react-icons/fi'; 

const menus = [
  { name: '예능', path: '/entertainment' },
  { name: '드라마', path: '/drama' },
  { name: '영화', path: '/movie' },
  { name: '애니', path: '/ani' },
  { name: '해외시리즈', path: '/global' },
  { name: '시사교양', path: '/culture' },
  { name: '키즈', path: '/kids' },
  { name: '영화플러스', path: '/movieplus' },
  { name: 'LIVE', path: '/live' },
];

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 100px',
        backgroundColor: '#1b1b1b',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '40px', //해더(네비바) 높이
      }}
    >
      {/*웨이브 로고*/}
      <Link to="/">
        <img
          src="https://www.wavve.com/img/ci-wavve-112-x-24.f239a950.svg"
          alt="WAVVE logo"
          style={{ height: '25px' }}
        />
      </Link>

      {/*메뉴*/}
      <nav style={{ display: 'flex', gap: '24px' }}>
        {menus.map((menu, i) => (
          <Link
            key={i}
            to={menu.path}
            style={{
              color: '#d9d9d9',
              fontSize: '17px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/*아이콘*/}
      <div style={{ display: 'flex', gap: '20px', fontSize: '20px', color: '#c2c2c2' }}>
        <FiSearch style={{ cursor: 'pointer' }} />
        <FiUser style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Header;
