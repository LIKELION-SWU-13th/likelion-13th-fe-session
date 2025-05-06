import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { diaries } = useContext(DiaryContext);
  const navigate = useNavigate();

  const diary = diaries.find((item) => item.id === Number(id));

  if (!diary) {
    return (
      <div>
        <p>일기를 찾을 수 없습니다.</p>
        <Link to="/history">← 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div style={{ margin: "30px" }}>
      <h2>기록 상세</h2>
      <p>날짜: {diary.date}</p>
      <p>기분: {diary.moodLabel}</p>
      <p>내용:{diary.text}</p>
      <br />
      <button onClick={() => navigate("/history")} className = "button">목록으로</button>
    </div>
  );
}

export default Detail;
