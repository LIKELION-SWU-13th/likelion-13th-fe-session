import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function History() {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(saved);
  }, []);

  const handleDelete = (id) => {
    const filtered = entries.filter((entry) => entry.id !== id);
    setEntries(filtered);
    localStorage.setItem("entries", JSON.stringify(filtered));
  };

  return (
    <div>
      <h2>기록 목록</h2>
      <ul>
  {entries.map((entry) => (
    <li
      key={entry.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <Link to={`/detail/${entry.id}`} style={{ flex: 1 }}>
        [{entry.date}] {entry.mood} - {entry.text.slice(0, 10)}...
      </Link>
      <button
        onClick={() => handleDelete(entry.id)}  //기록 삭제
        className="delete-button"
      >
        삭제
      </button>
    </li>
  ))}
</ul>
<button
        onClick={() => navigate("/")}   //메인 화면으로 이동
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        처음으로
      </button>
    </div>
  );
}

export default History;