import React from "react";

function App() {
  const routines = [
    {
      id: 1,
      title: "🌞 아침",
      time: "08:00",
      action: "유산균 먹기",
      dct: "유산균과 물 한 잔으로 몸을 깨워요!"
    },
    {
      id: 2,
      title: "🍱 점심",
      time: "12:00",
      action: "점심 먹을 시간",
      dct: "점심 메뉴는 아주 아주 중요해요!",
      condition: "점심은 챙겨온 도시락으로!"
    },
    {
      id: 3,
      title: "🌜 저녁",
      time: "20:00",
      action: "과제나 학교 공부하기",
      dct: "저녁밥을 먹고 개운하게 샤워한 후 오늘 배운 내용을 정리해봐요!"
    }
  ];

  const wrong = () => {
    alert(`삐이! 잘못 눌렀습니다. 밑에 하트를 눌러주세요.`);
  }

  const cheer = () => {
    alert(`내일의 당신도 언제나 응원합니다!`);
  }

  return (
    <div>

      <div>
        <h1 style={{ color: 'purple', textAlign: 'center', padding: '10px' }}>
        ⏰ 나의 하루 루틴
        </h1>
      </div>

      {routines.map((routine) => ( 
        <div key={routine.id} style={{
          padding: '30px',
          fontFamily: 'Pretendard, sans-serif',
          backgroundColor: '#f7f9fc',
          maxWidth: '600px',
          margin: '20px auto',
          boxShadow: '0 8px rbga(0, 0, 0, 0.1)',
          textAlign: 'left' 
        }}>
          <h1 style={{ color: 'black', marginBottom: '20px', marginLeft: '0', fontWeight: 'bold' }}>
            {routine.title} | {routine.time}
          </h1>
          <p style={{ fontSize: '18px', color: '#555', fontWeight: 'bold' }}>
            {routine.action}
          </p>
          <p style={{ fontSize: '18px', color: 'pink' }}>
            {routine.dct}
          </p>
          {routine.condition && (
            <p style={{ fontSize: '18px', color: 'orange' }}>
            🌟 {routine.condition}
          </p>
          )}
      </div>
      ))}
      
      <button onClick={wrong} style={{
        margin: '20px auto 0 auto',
        padding: '12px 24px',
        backgroundColor: 'yellow',
        color: 'brown',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '15px',
        boxShadow: '0 4px 8px rgba(74,144,226,0.3)',
        display: 'block'
      }}>
        응원의 하트 눌러주기
      </button>

      <button onClick={cheer} style={{
        margin: '20px auto 0 auto',
        padding: '12px 24px',
        backgroundColor: 'yellow',
        color: 'brown',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(74,144,226,0.3)',
        display: 'block'
      }}>
        ❤️❤️❤️
      </button>
  </div>
  );
}

export default App;
