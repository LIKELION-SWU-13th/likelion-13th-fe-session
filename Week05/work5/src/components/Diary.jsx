import React, { useState } from "react";

function Diary({ onSave }) {
  const [diary, setDiary] = useState("");
  const handleChange = (e) => {
    setDiary(e.target.value);
  };

  //저장 버튼 클릭 시 입력값 전달
  const handleClick = () => {
    if (diary.trim()) {
      onSave(diary);
      setDiary(""); //입력창 비우기
    }
  };

  return (
    <div style={{ marginTop: '15px' }}>
      {/*일기 입력창*/}
      <input
        type="text"
        placeholder="오늘의 한 줄 일기를 작성해보세요!"
        value={diary}
        onChange={handleChange}
        style={{
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: '200px',
          marginRight: '8px'
        }}
      />
      {/*저장 버튼*/}
      <button onClick={handleClick} style={{
        padding: '8px 12px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer'
      }}>
        저장
      </button>
    </div>
  );
}

export default Diary;
