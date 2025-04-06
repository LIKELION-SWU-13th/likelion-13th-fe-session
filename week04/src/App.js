import bgImg from './assets/aaa.jpg';
import './App.css';
function App() {
  const day = [
    { id: 1, time: '09:00', todo: '아침먹기', comment: '배고프면 집중이 안되요' },
    { id: 2, time: '13:00', todo: '공부하기', comment: '오늘은 React' },
    { id: 3, time: '22:00', todo: '계획세우기', comment: '내일은 뭐하지?' },
  ];
  const message = () => {
    alert('오늘 하루도 화이팅');
  };

  const styles = {
    app: {
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#333',
      textAlign: 'center',
      padding: '0px' 

    },
    container: {
      minWidth: '400px',
      maxWidth: '450px',
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '40px',
      borderRadius: '20px',
      margin: '30px auto',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      listStyle: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      color: 'white',
      alignItems: 'center',

    },
    button: {
      padding: '12px 24px',
      backgroundColor: 'transparent',
      color: '#fff',
      borderRadius: '15px',
      border: '1px solid white',
      cursor: 'pointer',
      fontSize: '12px',
      boxShadow: '0 4px 8px rgba(65, 64, 64, 0.3)'
    }
  };

  return (
    <div className="App" style={styles.app}>
      <h2 style={{ color: 'white', margin: '0px', paddingTop: '30px' }}>☁ 나의 하루 루틴</h2>
      <ul style={{paddingInlineStart: '0px' }}>
        {day.map(days => (
          <li key={days.id} style={styles.container}>
            <div style={{ textAlign: 'center', margin: 'auto 0px' }}>
              <h2>{days.time}</h2>
            </div>
            <div style={{ margin: 'auto 40px' }}>
              <h3>{days.todo}</h3>
              <h4 style={{ color: '#d9d9d9' }}>{days.comment}</h4>
              {days.id === 2 ? (
                <h4 style={{ color: '#112152' }}>
                  ✨ 프론트엔드 개발자로 성공하자!!
                </h4>
              ) : null}</div>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={message} style={styles.button}>
          💪 오늘 하루 응원하기
        </button>
      </div>
    </div>
  );
}

export default App;
