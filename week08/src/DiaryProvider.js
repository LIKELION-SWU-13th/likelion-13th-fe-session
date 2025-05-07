import React, { useState, useEffect } from "react";
import { DiaryContext } from "./DiaryContext";

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([]);

  //시작할 때 로컬스토리지에서 일기 목록 불러옴
  useEffect(() => {
    const saved = localStorage.getItem("diaries");
    if (saved) {
      setDiaries(JSON.parse(saved));
    }
  }, []);

  //일기 추가될때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  //일기 추가
  const addDiary = (entry) => {
    setDiaries((prev) => [...prev, entry]);
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};
