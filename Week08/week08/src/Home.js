import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [mood, setMood] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!mood || !text) return;
    const saved = JSON.parse(localStorage.getItem("entries") || "[]");
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      text,
    };
    localStorage.setItem("entries", JSON.stringify([newEntry, ...saved]));
    setText("");
    navigate("/history");
  };

  return (
    <div>
      <h2>오늘의 기분은?</h2>
      <div>
        {["😊", "😐", "😢"].map((m) => (
          <button key={m} onClick={() => setMood(m)}
          className={mood === m ? "mood-button selected" : "mood-button"}
          >
            {m}
          </button>
        ))}
      </div>
      <textarea
        placeholder="간단히 메모해보세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>기록하기</button>
      <button
        onClick={() => navigate("/history")} //목록으로 이동
        className="button"
        style={{ marginLeft: "10px" }}
        >
            목록 보기
        </button>
    </div>
  );
}

export default Home;