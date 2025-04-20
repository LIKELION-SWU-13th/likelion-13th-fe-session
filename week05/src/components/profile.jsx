import React, { useState, useEffect } from "react";

function Profile({ img, mood }) {
    const [todayMood, setTodayMood] = useState(mood);

    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
    };

    useEffect(() => {
        console.log("오늘의 나의 기분은 좋을 거야! 행복하자😊");
    }, []);

    return (
        <div
        style={{
            textAlign: "center",
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "24px",
            maxWidth: "300px",
            margin: "70px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h2>내 프로필</h2>
            <img
            src={img}
            alt="profile"
            style={{ width: "120px", borderRadius:"50%"}}
            />
            <p style={{ fontWeight: "bold"}}>오늘의 기분: {todayMood}</p>
            <button onClick={toggleMood}>기분 바꾸기</button>
        </div>
    );
}

export default Profile;