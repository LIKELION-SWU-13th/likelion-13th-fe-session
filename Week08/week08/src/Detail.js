import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries") || "[]");
    const found = saved.find((e) => e.id === parseInt(id));
    setEntry(found);
  }, [id]);

  if (!entry) return <div>기록을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h2>기록 상세</h2>
      <p>날짜: {entry.date}</p>
      <p>기분: {entry.mood}</p>
      <p>내용: {entry.text}</p>
      <button onClick={() => navigate("/history")}>목록으로</button>
    </div>
  );
}

export default Detail;