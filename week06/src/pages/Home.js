import React, { useState } from 'react';
import { useDiary } from '../DiaryContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Page.css';

const Home = () => {
  const [mood, setMood] = useState('');
  const [text, setText] = useState('');
  const { addEntry } = useDiary();
  const navigate = useNavigate();

  const handleSave = () => {
    if (!mood || !text) return;
    const newEntry = {
      id: uuidv4(),
      date: new Date().toISOString().split('T')[0],
      mood,
      text,
    };
    addEntry(newEntry);
    navigate('/history');
  };

  return (
    <div className="container">
      <h2>오늘의 기분을 기록해보세요</h2>
      <div className="mood-buttons">
        {['happy', 'neutral', 'sad'].map((m) => (
          <button className={mood === m ? 'active' : ''} key={m} onClick={() => setMood(m)}>
            {m === 'happy' ? '😄' : m === 'neutral' ? '😐' : '😢'}
          </button>
        ))}
      </div>
      <textarea
        className="diary-textarea"
        placeholder="오늘 있었던 일을 간단히 써보세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="save-button" onClick={handleSave}>기록하기</button>
    </div>
  );
};

export default Home;
