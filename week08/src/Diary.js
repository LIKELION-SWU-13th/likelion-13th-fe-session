import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Diary.css";
import { DiaryContext } from "./DiaryContext";

function Diary() {
  const [mood, setMood] = useState("");
  const [diary, setDiary] = useState("");
  const navigate = useNavigate();
  const { addDiary } = useContext(DiaryContext); //context에서 일기 추가하는 함수 가져옴

  const handleSubmit = () => {
    const date = new Date().toLocaleDateString("ko-KR");
    const id = Date.now().toString(); //현재 시간을 문자열로 하여 id로 사용

    const newDiary = { id, date, mood, diary }; //새 일기 객체

    addDiary(newDiary); //일기 추가

    setDiary(""); //입력창 초기화
    navigate("/History"); //목록 페이지로 이동
  };

  return (
    <div className="todayDiary">
      <h2>오늘의 기분을 기록해보세요</h2>
      <button
        onClick={() => {
          setMood("happy");
        }}
      >
        😁
      </button>
      <button
        onClick={() => {
          setMood("soso");
        }}
      >
        😑
      </button>
      <button
        onClick={() => {
          setMood("sad");
        }}
      >
        😢
      </button>
      <input
        type="text"
        placeholder="오늘 있었던 일을 간단히 써보세요"
        value={diary}
        onChange={(e) => setDiary(e.target.value)}
      />

      {/* 일기 쓰기 전에는 버튼 비활성화 */}
      <button disabled={!diary} onClick={handleSubmit}>
        기록하기
      </button>
      <p></p>
    </div>
  );
}

export default Diary;
