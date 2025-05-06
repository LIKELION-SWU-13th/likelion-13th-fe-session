import { createContext, useContext, useState, useEffect } from 'react';

const DiaryContext = createContext();
export function DiaryProvider({ children }) {
  const [diaryList, setDiaryList] = useState(() => {
    const saved = localStorage.getItem('diaryList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('diaryList', JSON.stringify(diaryList));
  }, [diaryList]);

   //새로운 기록 추가
  const addDiary = (entry) => {
    setDiaryList((prev) => [...prev, entry]);
  };

  return (
    <DiaryContext.Provider value={{ diaryList, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  return useContext(DiaryContext);
}
