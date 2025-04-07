import React from "react";

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    fontFamily: 'Pretendard, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9fb',
  },
  card: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
    marginBottom: '24px',
  },
  button: {
    backgroundColor: '#337aff',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
  },
  highlight: {
    color: '#ff5a00',
    marginTop: '8px',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '40px'
  }
};

function App() {
  const routineList = [
    {
      time: '08:00',
      title: '아침',
      task: '스트레칭하기',
      description: '기분 좋게 하루를 시작해요!',
    },
    {
      time: '13:00',
      title: '점심',
      task: '친구랑 점심 먹기',
      description: '오늘은 제육덮밥!',
      isLunch: true, //조건부 렌더링용
    },
    {
      time: '20:00',
      title: '저녁',
      task: 'React 공부하기',
      description: '프론트엔드 개발자로 성공하자!',
    },
  ];

  const handleClick = () => {
    alert('오늘 루틴 응원합니다!💪');
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#337aff', textAlign: 'center' }}>📆 나의 하루 루틴</h2>

      {routineList.map((routine, index) => (
        <div key={index} style={styles.card}>
          <h3>{routine.title} | {routine.time}</h3>
          <strong>{routine.task}</strong>
          <p style={{color: '#666'}}>{routine.description}</p>
          {routine.isLunch && (
            <p style={styles.highlight}>⭐️ 점심은 꼭 챙겨 먹어요!</p>
          )}
        </div>
      ))}
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={handleClick}>
        오늘 루틴 응원하기 💪
      </button>
    </div></div>
  );
}

export default App;