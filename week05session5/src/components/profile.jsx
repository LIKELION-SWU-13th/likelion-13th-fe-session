import React, { useState, useEffect } from "react";
import Title from "./Title";
import MoodText from "./MoodText";
import MoodImage from "./MoodImage";
import Quote from "./Quote";

function Profile({ happyImg, sadImg, mood}) {
    const [todayMood, setTodayMood] = useState(mood);

    const toggleMood = () => {
        setTodayMood((prev => prev === "행복해" ? "슬퍼" : "행복해"));
    };

    useEffect(() => {
        console.log("오늘의 나의 기분은 좋을거야! 행복하자 🥰");
    }, []);

    /*const profileImg = todayMood === "행복해" ? happyImg : sadImg;*/

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
            width: "200px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1"
        
        }}>
            <Title text="내 프로필"/>
            <MoodImage mood={todayMood} happyImg={happyImg} sadImg={sadImg}/>
            <MoodText mood={todayMood} />
            <Quote mood={todayMood} />
            <button onClick={toggleMood}>기분 바꾸기</button>
        </div>
    );
}

export default Profile;