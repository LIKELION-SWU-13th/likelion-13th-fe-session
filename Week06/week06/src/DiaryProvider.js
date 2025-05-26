import React, { useState, useEffect } from 'react';
import { DiaryContext } from './DiaryContext';

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('diaries');
    if (saved) setDiaries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('diaries', JSON.stringify(diaries));
  }, [diaries]);

  const addDiary = (diary) => {
    setDiaries((prev) => [...prev, { ...diary, id: Date.now() }]);
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};