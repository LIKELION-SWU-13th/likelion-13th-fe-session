import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDiary } from '../context/DiaryContext';

const emotions = [
  { icon: '😊', label: '행복' },
  { icon: '😐', label: '보통' },
  { icon: '😢', label: '슬픔' },
  { icon: '😡', label: '화남' },
  { icon: '😮', label: '놀람' },
];

export default function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { addDiary } = useDiary();

  //기록 저장 후 history로 이동
  const handleSubmit = () => {
    if (!selectedEmotion || !content.trim()) {
      alert('감정과 내용을 모두 입력해주세요!'); //유효성 검사
      return;
    }
    addDiary({
      date: new Date().toLocaleDateString(),
      emotion: selectedEmotion,
      content,
    });
    setSelectedEmotion('');
    setContent('');
    navigate('/history');
  };
  const handleGoToHistory = () => {
    navigate('/history');
  };
  

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      backgroundColor: '#fff8dc',
      borderRadius: '20px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    emotionBox: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '1.5rem',
    },
    emotionButton: (isSelected) => ({
      backgroundColor: isSelected ? '#ffe58f' : '#fff',
      border: '2px solid #ffd666',
      borderRadius: '12px',
      padding: '1rem',
      fontSize: '2rem',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'background-color 0.2s',
    }),
    emotionLabel: {
      fontSize: '0.9rem',
      marginTop: '0.3rem',
      color: '#555',
    },
    textarea: {
      width: '100%',
      height: '120px',
      padding: '1rem',
      border: '2px solid #ffd666',
      borderRadius: '12px',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      resize: 'none', //textarea 밑에 // 모양의 사이즈 조절 없애기
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#ffbb33',
      color: 'white',
      padding: '1rem',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    submitButtonHover: {
      backgroundColor: '#ffa500',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>오늘의 기분을 기록해보세요</h2>
      <div style={styles.emotionBox}>
        {emotions.map((e) => (
          <button
            key={e.icon}
            style={styles.emotionButton(selectedEmotion === e.icon)}
            onClick={() => setSelectedEmotion(e.icon)}
          >
            {e.icon}
            <span style={styles.emotionLabel}>{e.label}</span>
          </button>
        ))}
      </div>
      <textarea
        style={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘 하루를 기록해보세요"
      />
      <button
        style={styles.submitButton}
        onClick={handleSubmit}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor ='#ffa500')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor ='#ffbb33')}
      >
        기록하기
      </button>
      <button
        style={{
            ...styles.submitButton,
            backgroundColor: '#bbb',
            marginTop: '0.8rem',
        }}
        onClick={handleGoToHistory}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor ='#999')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor ='#bbb')}
        >
            기록 목록 보기
        </button>


    </div>
  );
}
