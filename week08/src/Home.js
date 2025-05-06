import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Home = () => {
  const { addRecord } = useContext(ThemeContext);
  const [mood, setMood] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const moods = ['😊', '😐', '😢'];

  const handleSubmit = () => {
    if (!mood || !text) return;
    addRecord({ mood, text });
    setMood('');
    setText('');
    navigate('/history');
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: '1px solid gray',
    borderRadius: '6px',
    backgroundColor: 'white',
    cursor: 'pointer',
    marginRight: '10px',
    marginTop: '10px',
    color: 'gray',
  };

  return (
    <div>
      <h2 style={{color:'gray'}}>| 오늘의 기분을 기록해보세요</h2>
      <div>
        {moods.map((m, i) => (
          <button
            key={i}
            onClick={() => setMood(m)}
            style={{
              fontSize: '24px',
              borderRadius: '10%',
              border: 'transparent',
              margin: '5px',
              backgroundColor: mood === m ? 'gray' : '#fff',
              color: mood === m ? '#fff' : '#000'
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="오늘 무슨일이 있었나요?"
        style={{ width: '500px', height: '100px', marginTop: '10px', padding: '8px', fontSize: '14px', borderRadius: '12px', borderColor: 'gray'}}
      />
      <div>
        <button
          onClick={handleSubmit}
          disabled={!mood || !text}
          style={{ ...buttonStyle, backgroundColor: !mood || !text ? 'white' : 'gray', color: !mood || !text ? 'gray' : 'white' }}
        >
          기록하기
        </button>
        <button onClick={() => navigate('/history')} style={buttonStyle}>
          목록 보기
        </button>
      </div>
    </div>
  );
};

export default Home;