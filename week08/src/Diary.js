import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

// 일기 작성 컴포넌트
function Diary() {
    const [feel, setFeel] = useState('happy');
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate(); // 페이지 이동을 위한 훅
    const { entries, setEntries } = useContext(DiaryContext); // Context에서 상태와 상태 변경 함수 가져오기

    const handleSubmit = () => {
        const newEntry = {
        id: Date.now(), // 고유 ID 생성
        date: new Date().toISOString().split("T")[0], // 오늘 날짜 저장 (yyyy-mm-dd 형식)
        mood: feel, // 현재 선택된 이모지를 mood라는 key로 저장
        content: inputText, // 입력한 텍스트 저장
        };
        setEntries([newEntry, ...entries]); // 새 일기를 기존 목록 앞에 추가
        navigate("/history"); // 그 다음 감정 목록 페이지로 이동함
    };
    
    return (
        <div>
            <h1>오늘의 기분을 기록해보세요</h1>
            <div>
                <button onClick={() => setFeel('happy')}>😁</button>
                <button onClick={() => setFeel('soso')}>😐</button>
                <button onClick={() => setFeel('sad')}>😭</button>
            </div>
            <div>
                <input type="text" 
                    placeholder="오늘 있었던 일을 간단히 써보세요" 
                    value={inputText}
                    onChange={(e) => {setInputText(e.target.value)}} />
            </div>
            <div>
                <button onClick={handleSubmit}>기록하기</button>
            </div>
        </div>
    )
}

export default Diary;