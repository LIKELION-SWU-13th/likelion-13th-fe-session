import React from 'react';

function App() {
  const day = [
    { id: 1, time: '아침 | 10:00', todo: '📚 독서하기', comment: '일어나자마자 핸드폰 보지 말고 만화책이라도 보자'},
    { id: 2, time: '점심 | 14:00', todo: '🍛 점심 제시간에 먹기', comment: '음료수 말고 물 마시자'},
    { id: 3, time: '저녁 | 20:00', todo: '📖 React 공부하기', comment: '계획 세워서 하나하나 해보자'},
  ];
   const message = () => {
    const messages = ['👊🏻 오늘도 화이팅 !', '🥤 물 마시기 !', '잠깐이라도 스트레칭 !', '조금 쉬자 ..!'];
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
   };

  return (
    <div style = {styles.container}>
      <h1 style= {{ color: '#4a90e2', textAlign: 'center', marginTop: '45px'}}>
        ✨ 나의 하루 루틴
      </h1>

      {day.map((item) => (
        <div key={item.id} style={styles.card}>
          <h2>{item.time}</h2>
          <p style={{ fontSize: '19px' }}><strong>{item.todo}</strong></p>
          <p>{item.comment}</p>

          {item.id === 2 && (
            <p style={{ color: 'darkorange' }}>🥗 조금씩이라도 야채 먹기 !</p>
          )}
        </div>
      ))}
      <div>
        <button onClick={message} style={styles.button}>
          🔥 오늘의 응원
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '20px auto',
    fontFamily: 'Pretendard, sans-serif',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9fb', 
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  
  card: {
    padding: '30px',
    backgroundColor: 'white', 
    borderRadius: '13px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    height: 'fit-content',
    marginBottom: '24px',
    textAlign: 'left',
  },

  button: {
    marginTop: '20px',
    padding: '17px 26px',
    backgroundColor: '#4a90e2',
    color: 'white',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '17px'
  }
};

export default App;


