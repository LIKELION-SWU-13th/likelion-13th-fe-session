import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDiary } from '../DiaryContext';
import './Page.css';

const History = () => {
  const { entries } = useDiary();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>기록한 감정 목록</h2>
      {entries.length === 0 ? (
        <p>아직 기록이 없습니다. 홈에서 감정을 기록해주세요.</p>
      ) : (
        <div className="card-list">
          {entries.map((entry) => (
            <div className="card" key={entry.id}>
              <Link to={`/detail/${entry.id}`}>
                <p><strong>{entry.date}</strong></p>
                <p>{entry.mood}</p>
                <p>{entry.text.slice(0, 30)}...</p>
              </Link>
            </div>
          ))}

          <div className="card add-card" onClick={() => navigate('/')}>
            <p style={{ fontSize: '32px', textAlign: 'center' }}>＋</p>
            <p style={{ textAlign: 'center', color: '#888' }}>새 기록 추가</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
