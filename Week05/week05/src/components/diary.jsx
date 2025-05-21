import React, { useState } from 'react';

function Diary() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const popupOpen = () => setOpen(true);
  const popupClose = () => setOpen(false);

  return (
    <div>
      <button className="button" onClick={popupOpen}>일기쓰기</button>

      {open && (
        <div className="card" >
        
          <h3>오늘의 일기</h3>
          <textarea
            className="textbox"
            placeholder="오늘의 일기를 작성해주세요...!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" onClick={popupClose}>저장하기</button>
        </div>
      )}
    </div>
  );
}

export default Diary;
