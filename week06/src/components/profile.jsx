import React, { useState, useEffect } from "react";
import ProfileImageUpload from "./ProfileImageUpload"; //추가 컴포넌트1: 프로필 이미지 변경
import TodaySentence from "./TodaySentence"; //추가 컴포넌트2: 프로필 내 오늘의 문장 띄우기

function Profile({ img, mood }) {
  const [todayMood, setTodayMood] = useState(mood);
  const [profileImage, setProfileImage] = useState(img); //업로드 이미지저장용(기본 이미지로 초기화)
  const [todaySentence, setTodaySentence] = useState(
    '"늦었다고 생각했을때가 진짜 늦었다"'
  ); //오늘의 문장용(디폴트 문장)

  const toggleMood = () => {
    setTodayMood((prev) => (prev === ":)" ? ":(" : ":)"));
  };

  useEffect(() => {
    console.log("오늘은 나의 기분이 좋을 거야! 행복하자");
  }, []);

  return (
    <div
      style={{
        margin: "40px auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>내 프로필</h1>

      {/*프로필카드 안*/}
      <div
        style={{
          margin: "0px auto",
          marginBottom: "50px",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          borderRadius: "12px",
          minWidth: "500px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/*오늘의 문장*/}
        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              color: "#555",
              maxWidth: "400px",
              wordBreak: "break-word",
              whiteSpace: "normal",
              fontSize: "30px",
              marginTop: "10px",
              fontFamily: "'Nanum Pen Script', cursive",
            }}
          >
            {todaySentence}
          </p>
        </div>

        {/*프로필사진*/}
        <div
          style={{
            height: "250px",
            width: "250px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div style={{ lineHeight: "250px" }}>-</div>
          )}
        </div>

        {/*오늘의 기분*/}
        <p style={{ color: "#FF7043", fontSize: "20px" }}>
          오늘의 기분 <span style={{ fontSize: "30px" }}> {todayMood}</span>
        </p>
      </div>

      {/*프로필 카드 밖- 기분바꾸기 버튼, 프로필 이미지 변경 버튼, 오늘의 문장 입력*/}
      <button
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#FF7043",
          color: "white",
          borderRadius: "15px",
          cursor: "pointer",
          fontSize: "16px",
          borderColor: "transparent",
        }}
        onClick={toggleMood}
      >
        기분 바꾸기
      </button>
      <ProfileImageUpload onImageChange={setProfileImage} />
      <TodaySentence sentence={todaySentence} setSentence={setTodaySentence} />
    </div>
  );
}

export default Profile;
