import React, { useState, useEffect } from "react";

function CheeringButton({ cheeringMessage }) {
  //추가컴포넌트-응원하기 컴포넌트

  return (
    <button
      onClick={cheeringMessage} //버튼 클릭 시 cheeringMessage함수 실행
      style={{
        backgroundColor: "#a5d776",
        borderRadius: "7px",
        marginBottom: "10px",
        border: "none",
        padding: "8px",
      }}
    >
      응원하기
    </button>
  );
}

function MenuRecommend({ menus }) {
  //추가컴포넌트-메뉴추천천 컴포넌트

  const getRandomMenu = function (length) {
    const randomIndex = Math.floor(Math.random() * menus.length);
    alert(`오늘의 추천 메뉴: ${menus[randomIndex]}`);
  };
  return (
    <button
      onClick={getRandomMenu}
      style={{
        backgroundColor: "#a5d776",
        borderRadius: "7px",
        marginBottom: "10px",
        border: "none",
        padding: "8px",
      }}
    >
      오늘의 점메추
    </button>
  );
}

// function MenuRecommend({ cheeringMessage }) {
//   //추가컴포넌트-메뉴 추천천 컴포넌트
//   const menus = ["라멘", "떡볶이", "치킨", "초밥", "파스타"];

//   const getRandomMenu = function (length) {
//     return ParseInt(Math.random() * length);
//   };

//   return (
//     <button
//       onClick={getRandomMenu} //버튼 클릭 시 cheeringMessage함수 실행
//       style={{
//         backgroundColor: "#a5d776",
//         borderRadius: "7px",
//         marginBottom: "10px",
//         border: "none",
//         padding: "8px",
//       }}
//     >
//       다른 메뉴 추천
//     </button>
//   );
// }

function Profile({ img, mood }) {
  const [todayMood, setTodayMood] = useState(mood);
  const menus = ["라멘", "떡볶이", "치킨", "초밥", "파스타"];

  const toggleMood = () => {
    setTodayMood((prev) => (prev === "행복해😄" ? "슬퍼😢" : "행복해😄"));
  }; //todayMood의 값을 바꾸는 함수

  useEffect(() => {
    console.log("오늘의 나의 기분은 좋을거야! 행복하자 😄 ");
  }, []); //처음 한 번만 실행되는 빈배열(의존성배열)

  //행복할때, 슬플때 각각 다른 응원 메세지 띄우는 함수 생성
  const cheeringMessage = () => {
    todayMood === "행복해😄"
      ? alert("오늘도 힘찬 하루!")
      : alert("슬퍼하지마! 내일은 행복해질거야");
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        내 프로필
      </h2>
      <div
        className="card"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          width: "300px",
          height: "300px",
          margin: "0 auto",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          border: "2px solid #ccc",
        }}
      >
        <img
          src={img}
          alt="프로필 이미지"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
          }}
        />
        <p>오늘의 기분: {todayMood}</p>
        <button
          onClick={toggleMood}
          style={{
            backgroundColor: "#a5d776",
            borderRadius: "7px",
            marginBottom: "10px",
            border: "none",
            padding: "8px",
          }}
        >
          기분 바꾸기
        </button>
        <CheeringButton cheeringMessage={cheeringMessage} />
        <MenuRecommend menus={menus} />
      </div>
    </div>
  );
}
export default Profile;
