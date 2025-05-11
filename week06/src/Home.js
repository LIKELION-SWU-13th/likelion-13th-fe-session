import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";


function Home() {
    const [mood, setMood] = useState("");
    const [text,setText] = useState("");
    const navigate = useNavigate();
    const { addDiary } = useContext(DiaryContext);

    const moodMap = {
        "😁": "happy",
        "😐": "not bad",
        "😥": "sad"
    };

    const handleSave = () => {
        if (!text) return alert("내용을 입력하세요")
        if (!mood) return alert("기분을 선택하세요")
        const newDiary = {
            id: Date.now(),
            text: text,
            mood: mood,
            moodLabel: moodMap[mood],
            date: new Date().toLocaleDateString()
        };

        addDiary(newDiary);
        setText("");
        setMood("");
        alert("일기가 저장되었습니다");
    };

    return (
        <div style = {{ margin: "30px" }}>
            <h2>오늘의 기분을 기록해보세요</h2>
            <div>
            {["😁","😐","😥"].map((m) => (
                <button key = {m} onClick = {() => setMood(m)}
                className = {mood === m ? "mood-button selected" : "mood-button"}
                >
                    {m}
                </button>
            ))}
            </div>
            <br />
            <textarea style = {{ width: "100%", height: "60px"}}
              placeholder = "오늘 있었던 일을 간단히 써보세요"
              value = {text}
              onChange = {(e) => setText(e.target.value)}
            />
            <br />
            <button onClick={handleSave}  className = "button">기록하기</button>
            <button onClick = {() => navigate("/history")} 
              className = "button">목록보기</button>

        </div>
    )
}

export default Home;