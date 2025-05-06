import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecordById } = useContext(ThemeContext);
  const record = getRecordById(id);
  const moodTextMap = {
    '😊': 'Happy',
    '😐': 'SoSo',
    '😢': 'Sad'
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

  if (!record) return <p>기록을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2 style={{color: 'gray'}}>| 기록 상세</h2>
      <p><strong>날짜: </strong> {record.date}</p>
      <p><strong>기분: </strong>{moodTextMap[record.mood]}</p>
      <p><strong>내용: </strong> {record.text}</p>
      <button onClick={() => navigate('/history')} style={buttonStyle}>목록으로</button>
      <button onClick={() => navigate('/')} style={buttonStyle}>홈으로</button>
    </div>
  );
};

export default Details;