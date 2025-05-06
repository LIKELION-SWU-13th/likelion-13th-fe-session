import { useParams, useNavigate } from 'react-router-dom';
import { useDiary } from '../context/DiaryContext';

export default function Detail() {
  const { id } = useParams();
  const { diaryList } = useDiary();
  const navigate = useNavigate();
  const entry = diaryList[id];

  if (!entry) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>해당 기록이 없습니다.</p>;
  }

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      backgroundColor: '#f6ffed',
      borderRadius: '20px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: '#333',
    },
    label: {
      fontWeight: 'bold',
      marginTop: '1rem',
      color: '#555',
    },
    value: {
      marginBottom: '1rem',

    },
    backButton: {
      marginTop: '2rem',
      width: '100%',
      backgroundColor: '#52c41a',
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
      <h2 style={styles.title}>기록 상세 페이지</h2>
      <div>
        <div style={styles.label}>날짜</div>
        <div style={styles.value}>{entry.date}</div>
        <div style={styles.label}>기분</div>
        <div style={styles.value}>{entry.emotion}</div>
        <div style={styles.label}>내용</div>
        <div style={styles.value}>{entry.content}</div>
      </div>
      <button style={styles.backButton} onClick={() => navigate('/history')}>
        목록으로 돌아가기
      </button>
    </div>
  );
}
