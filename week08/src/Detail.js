import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

// 기록 상세 컴포넌트
function Detail() {
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 id 추출
    const { entries } = useContext(DiaryContext);
  
    // 해당 id의 기록을 찾기
    const entry = entries.find((e) => e.id.toString() === id);
    // id 기록이 없으면
    if (!entry) return <p>기록을 찾을 수 없습니다.</p>;

    return (
        <div>
            <h1>기록 상세</h1>
            <p>날짜: {entry.date}</p>
            <p>기분: {entry.mood}</p>
            <p>내용: {entry.content}</p>
            <button onClick={() => navigate("/history")}>목록으로</button>
        </div>
    );
}

export default Detail;