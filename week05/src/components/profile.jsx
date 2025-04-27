import React, { useState,useEffect } from "react";
import happy from "../assets/image1.png";  
import sad from "../assets/image2.png";    
import Button from "./button";
import Diary from "./Diary";

function Profile({ img, mood }) {
    const [todayMood, setTodayMood] = useState(mood);
    const [showDiary, setShowDiary] = useState(false);
    const [diaryText, setDiaryText] = useState("");


    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
        setShowDiary(false);
    };

    useEffect(() => {
        console.log("오늘의 나의 기분은 좋을 거야 ! 행복하자 😁");
    }, []);

    const currentImg = todayMood === "행복해" ? happy : sad;

    const handleMoodAction = () => {
       if (todayMood === "행복해") {
            setShowDiary(true);
        } else {
            const savedDiaryList = JSON.parse(localStorage.getItem("diaries")) || [];
            if (savedDiaryList.length === 0) {
              alert("저장된 일기가 없습니다.");
              return;
          }
          const randomDiary = savedDiaryList[Math.floor(Math.random() * savedDiaryList.length)];
          alert(`${randomDiary}가 행복했는데 오늘 해보자 !`); // 랜덤 일기를 팝업으로 표시
        }
      };
      
    return (
        <div style={{ 
            textAlign: "center",
            margin: '80px', 
            }}>
            <h2>내 프로필</h2>
        <div style = {{
            textAlign: "center",
            margin: 'auto',
            borderRadius: '13px',
            maxWidth: '300px',
            padding: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}>
            
            <img src = {currentImg} alt = "profileimg" style = {{ width: "150px", borderRadius: "50%" }} />
            <p style =  {{ fontWeight: "bold", fontSize: "23px" }}> 오늘의 기분: {todayMood} </p>
            <Button onClick = {toggleMood}>기분 바꾸기</Button>
            <Button onClick={handleMoodAction}> {todayMood === "행복해" ? "행복 일기" : "행복 찾기"}</Button>
            
            {showDiary && (
                    <Diary
                        diaryText={diaryText}
                        setDiaryText={setDiaryText}
                        closeDiary={() => setShowDiary(false)}
                    />
                )}
        </div>
        </div>
    );
}
export default Profile;