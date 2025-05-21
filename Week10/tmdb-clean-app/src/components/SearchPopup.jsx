import React from 'react';

function SearchPopup({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <input className="search-input" type="text" placeholder="검색어를 입력하세요" autoFocus />
        <button className="icon" onClick={onClose}>
          <img src='https://www.tving.com/img/icon_x.svg' alt='닫기'/>
        </button>
      </div>
    </div>
  );
}

export default SearchPopup;
