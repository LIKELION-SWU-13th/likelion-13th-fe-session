import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDiary } from '../DiaryContext';
import './Page.css';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEntryById } = useDiary();
  const entry = getEntryById(id);

  if (!entry) return <p>기록을 찾을 수 없습니다.</p>;

  return (
    <div className="container">
      <div className="card">
        <h2>기록 상세</h2>
        <p><strong>날짜:</strong> {entry.date}</p>
        <p><strong>기분:</strong> {entry.mood}</p>
        <p><strong>내용:</strong> {entry.text}</p>
        <button className="save-button" onClick={() => navigate('/history')}>목록으로</button>
      </div>
    </div>
  );
};

export default Detail;
