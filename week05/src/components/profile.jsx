import React, { useState, useEffect } from "react";
import MoodText from "./moodtag";     
import MoodMessage from "./moodmsg";       
import "../App.css";
import happyImg from "../asset/profile.jpg";
import sadImg from "../asset/profile_sad.png";

function Profile() {
  const [mood, setMood] = useState("행복해");

  const toggleMood = () => {
    setMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
  };
  const profileImg = mood === "행복해" ? happyImg : sadImg;//이미지 변환 코드

  useEffect(() => {
    console.log(`오늘의 기분은 정말 ${mood}입니다 😎`);
  }, [mood]);

  return (
    <div className="profile-card">
      <h2>내 프로필</h2>

<img src={profileImg} alt="프로필" className="profile-img"
     style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "10px"
      }} />
      <p>
        오늘의 기분: <MoodText mood={mood} />
      </p>
      <MoodMessage mood={mood} />
      <button onClick={toggleMood} className="mood-btn">
        기분 바꾸기
      </button>
    </div>
  );
}

export default Profile;
