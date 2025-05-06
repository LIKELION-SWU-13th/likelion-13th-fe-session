import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const List = () => {
  const { records } = useContext(ThemeContext);
  const navigate = useNavigate();
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
  
  return (
    <div>
      <h2 style={{color: 'gray'}}>| 기록한 감정 목록</h2>
      <ul>
        {records.map((rec) => (
          <li key={rec.id} >
            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/detail/${rec.id}`}>[{rec.date}] {moodTextMap[rec.mood]}- {rec.text.slice(0, 10)}...</Link>
          </li>
        ))}
      </ul>
      <button style={ buttonStyle } onClick={() => navigate('/')} >
        홈으로
      </button>
    </div>
  );
};

export default List;