import React from "react";

function App() {
  const routine = [
    {
      id: 1,
      time: "아침 | 8:00",
      task: "비타민 먹기",
      description: "각종 비타민과 유산균을 챙겨먹어요",
    },
    {
      id: 2,
      time: "점심 | 13:00",
      task: "친구와 점심 먹기",
      description: "오늘은 츄밥",
    },
    {
      id: 3,
      time: "저녁 | 20:00",
      task: "헬스장 가기",
      description: "건강한 몸을 유지해요",
    },
  ];

  /*버튼 클릭시 문구*/
  const cheering = () => {
    alert("오늘 하루도 파이팅!! ");
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#3891ff" }}>
        🗓️나의 하루 루틴
      </h2>
      <div
        style={{
          padding: "25px",
          fontFamily: "Pretendrad, sans-serif",
          backgroundColor: "#f7f9fc",
          borderRadius: "12px",
          maxWidth: "700px",
          margin: "10px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
        }}
      >
        {routine.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "25px",
              fontFamily: "Pretendrad, sans-serif",
              backgroundColor: "#f7f9fc",
              borderRadius: "12px",
              maxWidth: "700px",
              margin: "10px auto",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h3>{item.time}</h3>
            <h4>{item.task}</h4>
            <p>{item.description}</p>
            {item.id == 2 && <p>⭐점심은 꼭 챙겨먹어요!</p>}
          </div>
        ))}

        <button
          onClick={cheering}
          style={{
            padding: "12px",
            backgroundColor: "#4282f7",
            borderRadius: "30px",
            border: "none",
            width: "180px",
            margin: "20px auto",
            display: "block",
            fontSize: "15px",
            color: " #ffffff",
            cursor: "pointer",
          }}
        >
          오늘 루틴 응원하기👍🏻
        </button>
      </div>
    </div>
  );
}
export default App;
