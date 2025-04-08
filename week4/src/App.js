import React, { useState } from 'react';
import './App.css';

function App() {
    {/* 루틴 리스트(과제 기본 값!) */}
  const [routines, setRoutines] = useState([
    {
      time: '08:00',
      title: '스트레칭하기',
      desc: '기분 좋게 하루를 시작해요!',
    },
    {
      time: '13:00',
      title: '친구랑 점심 먹기',
      desc: '오늘은 제육덮밥!',
    },
    {
      time: '20:00',
      title: 'React 공부하기',
      desc: '프론트엔드 개발자 도전!',
    },
  ]);

  const [newRoutine, setNewRoutine] = useState({
    time: '',
    title: '',
    desc: '',
  });

  const handleChange = (e) => {
    setNewRoutine({ ...newRoutine, [e.target.name]: e.target.value });
  };

  const addRoutine = () => {
    if (newRoutine.time && newRoutine.title) {
      setRoutines([...routines, newRoutine]);
      setNewRoutine({ time: '', title: '', desc: '' });
    }
  };

  const deleteRoutine = (index) => {
    const updated = [...routines];
    updated.splice(index, 1);
    setRoutines(updated);
  };

  const cheerRoutine = () => {
    alert('넌 할 수 있어!');
  };

  return (
    <>

      <div
        style={{
          backgroundColor: '#121212',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />

      <div
        style={{
          padding: '2rem',
          fontFamily: 'sans-serif',
          maxWidth: '700px',
          margin: '0 auto',
          minHeight: '100vh',
          color: '#ffffff',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>📌 나의 하루 루틴</h2>

        {/* 루틴 추가 입력창 */}
        <div
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: '#1e1e1e',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h4 style={{ textAlign: 'center', color: '#ffffff' }}>📝 루틴 추가하기</h4>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              type="time"
              name="time"
              value={newRoutine.time}
              onChange={handleChange}
              placeholder="시간"
              style={{ padding: '0.4rem', borderRadius: '6px' }}
            />
            <input
              type="text"
              name="title"
              value={newRoutine.title}
              onChange={handleChange}
              placeholder="제목"
              style={{ padding: '0.4rem', borderRadius: '6px' }}
            />
            <input
              type="text"
              name="desc"
              value={newRoutine.desc}
              onChange={handleChange}
              placeholder="설명"
              style={{ padding: '0.4rem', borderRadius: '6px' }}
            />
            <button
              onClick={addRoutine}
              style={{
                padding: '0.4rem 1rem',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              추가
            </button>
          </div>

          {/* 응원 버튼 */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              onClick={cheerRoutine}
              style={{
                padding: '0.5rem 1.2rem',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              오늘 루틴 응원하기 💪
            </button>
          </div>
        </div>

        {/* 루틴 리스트(과제 기본 값!) */}
        {routines.map((item, index) => (
          <div
            key={index}
            style={{
              margin: '1rem 0',
              padding: '1rem',
              borderRadius: '10px',
              backgroundColor: '#1e1e1e',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            }}
          >
            <h3 style={{ color: '#ffffff' }}>{item.time}</h3>
            <p style={{ fontWeight: 'bold', color: '#ffffff' }}>{item.title}</p>
            <p>{item.desc}</p>
            {item.time.startsWith('13') && (
              <p style={{ color: '#ff9800', fontWeight: 'bold' }}>
                ⭐ 점심은 꼭 챙겨 먹어요!
              </p>
            )}
            <button
              onClick={() => deleteRoutine(index)}
              style={{
                marginTop: '0.5rem',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
