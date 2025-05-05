import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

function Detail() {
  const { id } = useParams(); //url에 포함된 파라미터값(:id ) 가져옴
  const { diaries } = useContext(DiaryContext);

  const item = diaries.find((item) => item.id === id);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(-1);
  }; //이전 페이지(목록)으로 이동

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>기록 상세</h2>
      <p>날짜: {item.date}</p>
      <p>기분: {item.mood}</p>
      <p>내용: {item.diary}</p>
      <button onClick={handleSubmit}>목록으로</button>
    </div>
  );
}

export default Detail;
