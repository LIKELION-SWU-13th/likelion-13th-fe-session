import React, { useState, useEffect } from "react";
import Button from "./button";

function Diary() {
    const [diaryText, setDiaryText] = useState("");
    const [diaryList, setDiaryList] = useState([]);

    useEffect(() => {
        const savedDiaryList = JSON.parse(localStorage.getItem("diaries")) || [];
        setDiaryList(savedDiaryList);
    }, []);

    const saveDiary = () => {
        if (!diaryText.trim()) {
            alert("일기 내용을 입력해주세요!");
            return;
        }

        const newDiaryList = [...diaryList, diaryText];
        localStorage.setItem("diaries", JSON.stringify(newDiaryList));
        setDiaryList(newDiaryList);
        alert("저장 완료!");
        setDiaryText(""); 
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <textarea 
                value={diaryText} 
                onChange={(e) => setDiaryText(e.target.value)}
                placeholder="한 줄로 행복했던 하루 기록하기!"
                rows="3"
                cols="30"
                style={{ borderRadius: "10px", padding: "10px", resize: "none" }}
            />
            
            <Button onClick={saveDiary} >저장하기</Button>
        </div>
    );
}

export default Diary;