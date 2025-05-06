import React, { createContext, useState, useEffect } from "react";

export const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("diaries");
    if (saved) setDiaries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  const addDiary = (newDiary) => {
    setDiaries((prev) => [...prev, newDiary]);
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};
