import React, { useState, useEffect } from 'react';

function Profile({ img, mood }) {
  const [todayMood, setTodayMood] = useState(mood);

  const toggleMood = () => {
    setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
  };

  useEffect(() => {
    console.log("오늘 나의 기분은 좋을 거야! 행복하자 ☺️");
  }, []);

  return (
    <div class="card">
      <img src={img} alt="프로필 이미지" class="image" />
      <h3>오늘의 기분: {todayMood}</h3>
      <button class="button" onClick={toggleMood}>기분 바꾸기</button>
      </div>
  );
}

export default Profile;
