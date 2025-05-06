import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

// 일기 목록 표시 컴포넌트
function History() {
  const { entries } = useContext(DiaryContext);

  return (
    <div>
      <h1>기록한 감정 목록</h1>
      <ul>
        {entries.map((entry) => ( 
          <li key={entry.id}>
            <Link to={`/detail/${entry.id}`}> {/* 상세 페이지로 이동 */}  
              [{entry.date}] {entry.mood} - {entry.content.slice(0, 10)}...
              {/* entry.content.slice(0, 10)로 텍스트 앞 10글자만 잘라 미리볼 수 있게 함 */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;