import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

function History() {
  const { diaries } = useContext(DiaryContext);
  return (
    <div style={{ width: "400px", height: "150px", margin: "auto" }}>
      <h2>기록한 감정 목록</h2>
      <ul>
        {diaries.map((item) => (
          <li key={item.id}>
            <Link to={`/Detail/${item.id}`}>
              [{item.date}] {item.mood} - {item.diary}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default History;
