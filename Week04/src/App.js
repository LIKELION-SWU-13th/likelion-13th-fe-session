
import React from 'react';
const styles = {
        container: {
          maxWidth:'700px',
          margin:'40px auto',
          fontFamily: 'pretendard, sans-serif',
          padding: '20px',
          backgroundColor: '#f9f9fb'
        },
        card: {
          backgroundColor:'#fff',
          padding: '6px 25px',
          borderRadius:'12px',
          boxShadow:'0 4px 10px rgba(0,0,0,0.06)',
          marginBottom:'24px',    
          fontWeight: 'bold'},   
      
          
        btn: {
          backgroundColor:'	#60A5FA',
          color:'#fff',
          padding: '8px 16px',
          margin: '2px auto',
          borderRadius: '16px',
          borderWidth:'0px', 
          width: 'fit-content', 
          display: 'block'
                    } 
} ;

const routines = [
  {
    time: '08:00',
    title: '스트레칭하기',
    description: '기분 좋게 하루를 시작해요!',
    type: '아침',
  },
  {
    time: '13:00',
    title: '친구랑 점심 먹기',
    description: '오늘은 제육덮밥!',
    type: '점심',
  },
  {
    time: '20:00',
    title: 'React 공부하기',
    description: '프론트엔드 개발자로 성공하자!',
    type: '저녁',
  },
];


function RoutineCard({ routine }) {
 
  return (
    <div style={styles.card}>
      <h2>{routine.type} | {routine.time}</h2>
      <strong style={{fontSize:'17px', color: '#262627'}}>{routine.title}</strong>
      <p style={{fontSize:'13px', color: 'gray'}}>{routine.description}</p>
      {routine.type === '점심' && (
        <p style={{ fontSize:'15px',color: 'orange' }}>⭐ 점심은 꼭 챙겨 먹어요!</p>
      )}
    </div>
  );
}

function App() {
  const handleClick = () => {
    alert('힘내세요!☺️ 다 해내면 뿌듯할 거예요!🤩');
  };

  return (
    <div style={styles.container}>
      <h2 style={{color:'	#60A5FA', textAlign: 'center'}}>🗓️ 나의 하루 루틴</h2>
      {routines.map((r, index) => (
        <RoutineCard key={index} routine={r} />
      ))}
      <button style={styles.btn}onClick={handleClick}>오늘 루틴 응원하기 💪</button>
    </div>
  );
}

export default App;
