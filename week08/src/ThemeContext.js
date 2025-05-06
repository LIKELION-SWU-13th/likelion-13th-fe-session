import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('records');
    if (stored) setRecords(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    const newRecord = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      ...record
    };
    setRecords([newRecord, ...records]);
  };

  const getRecordById = (id) => records.find((r) => r.id === id);

  return (
    <ThemeContext.Provider value={{ records, addRecord, getRecordById }}>
      {children}
    </ThemeContext.Provider>
  );
};
