import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DiaryContext } from './DiaryContext';

const History = ({ detailMode = false }) => {
  const { diaries } = useContext(DiaryContext);
  const { id } = useParams();
  const navigate = useNavigate();

  if (detailMode) {
    const diary = diaries.find((d) => d.id === Number(id));
    if (!diary) return <div>기록을 찾을 수 없습니다.</div>;

    return (
      <div>
        <h2>기록 상세</h2>
        <p>날짜: {diary.date}</p>
        <p>기분: {diary.emotion}</p>
        <p>내용: {diary.content}</p>
        <button onClick={() => navigate('/history')}>목록으로</button>
      </div>
    );
  }
} 