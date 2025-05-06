import React, { createContext, useContext, useState, useEffect } from 'react';

const DiaryContext = createContext();
export const useDiary = () => useContext(DiaryContext);

export const DiaryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('diaryEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => setEntries([...entries, entry]);
  const getEntryById = (id) => entries.find((entry) => entry.id === id);

  return (
    <DiaryContext.Provider value={{ entries, addEntry, getEntryById }}>
      {children}
    </DiaryContext.Provider>
  );
};
