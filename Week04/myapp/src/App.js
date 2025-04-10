import React from "react";

function App() {
  const routines = [
    {
      //아침 루틴
      time: "09:00",
      title: "아침밥 먹기",
      notes: "기분 좋게 하루를 시작해요!",
      meal: "아침☀️",
    },
    {
      //점심 루틴
      time: "12:00",
      title: "동기랑 점심 먹기",
      notes: "오늘의 메뉴는 마파두부!",
      meal: "점심🍽️",
    },
    {
      //저녁 루틴
      time: "18:00",
      title: "저녁 먹고 React 공부하기",
      notes: "프론트엔드 개발자로 성공하자!",
      meal: "저녁🌙 ",
    },
  ];
  //버튼 클릭 시 알림 메세지
  const showMessage = () => {
    alert("아자자 오늘도 파이팅! 😆");
  };

  return (
    <div style={styles.container}>
      {/*제목*/}
      <h2 style={styles.title}>📅 나의 하루 루틴</h2>
      {/*배열을 map으로 반복 출력*/}
      {routines.map((routine, index) => (
        <div key={index} style={styles.card}>
          <p style={styles.time}>
            {routine.meal} | {routine.time}
          </p>
          {/*루틴 제목*/}
          <h3>{routine.title}</h3>
          {/*루틴 설명*/}
          <p>{routine.notes}</p>
          {/*조건부 렌더링: 점심 루틴만 표시*/}
          {routine.meal === "점심🍽️" && (
            <p style={styles.lunch}>⭐ 점심은 꼭 챙겨 먹어요!</p>
          )}
        </div>
      ))}
      
      {/*버튼 이벤트 처리*/}
      <button style={styles.button} onClick={showMessage}>
        오늘 루틴 응원하기 💪
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "Pretendard, sans-serif",
    backgroundColor: "#f9f9fb",
  },

  title: { //제목
    fontSize: "30px",
    color: "#4a90e2",
    marginBottom: "20px",
    textAlign: "center",
  },
  
  card: { //카드
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    marginBottom: "16px",
  },

  time: { //시간
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "24px",
    color: "#ADD8E6",
  }, 

  lunch: { //점심 추가 글
    color: "orange",
    fontWeight: "bold",
    marginTop: "8px",
  }, 
  
  button: { //버튼 
    marginTop: "24px",
    padding: "12px 20px",
    backgroundColor: "#4a90e2",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "24px auto 0",
    display: "block",
  },
};

export default App;
