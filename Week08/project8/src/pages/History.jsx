import { useDiary } from '../context/DiaryContext';
import { useNavigate } from 'react-router-dom';

export default function History() {
  const { diaryList } = useDiary(); //기록 목록 가져옴
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      backgroundColor: '#f0f9ff',
      borderRadius: '20px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#333',
    },
    entry: {
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#e6f7ff',
      borderRadius: '12px',
      cursor: 'pointer',
      border: '1px solid #91d5ff',
    },
    date: {
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontSize: '1rem',
    },
    content: {
      fontSize: '0.95rem',
      color: '#555',
      marginTop: '0.5rem',
    },
    backButton: {
      marginTop: '2rem',
      width: '100%',
      backgroundColor: '#1890ff',
      color: 'white',
      padding: '1rem',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>기록한 감정 목록</h2>
      {diaryList.length === 0 ? (
        <p style={{textAlign:'center', color:'#888'}}>아직 기록이 없습니다.</p>
      ) : (
        diaryList.map((entry, index) => (
          <div
            key={index}
            style={styles.entry}
            onClick={() => navigate(`/detail/${index}`)}
          >
            <div style={styles.date}>{entry.date} - {entry.emotion}</div>
            <div style={styles.content}>{entry.content.slice(0, 30)}...</div>
          </div>
        ))
      )}
      <button style={styles.backButton} onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
    </div>
  );
}
