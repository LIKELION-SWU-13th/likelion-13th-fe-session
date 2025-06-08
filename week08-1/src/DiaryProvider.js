//전역 저장소 채워주는 컴포넌트
import React, { useState, useEffect } from 'react';
import { DiaryContext } from './DiaryContext';

export const DiaryProvider = ({ children }) => { //div 역할?
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('diaries');
    if (saved) setDiaries(JSON.parse(saved)); // 문자열을 객체로
    // 바꿔줘야만 로컬 storage에 저장 가능
  }, []);

  useEffect(() => { // diaries 바뀔때마다 (localStorage에도 똑같이 저장), 새로고침해도 기록 안 날아감
    localStorage.setItem('diaries', JSON.stringify(diaries)); //객체나 배열 다루는. 안 날아가게
  }, [diaries]); // JSON : 데이터를 구조화된 문자열로 표현. js 객체로도 변경 가능
  //객체를 JSON(문자)으로 

  const addDiary = (diary) => { //새로운 일기 추가, id를 Date.now() 현재시간으로 줘서 고유 ID 생성
    setDiaries((prev) => [...prev, { ...diary, id: Date.now() }]);
  };

  //로컬스토리지는 문자열로만 저장하기 때문에 JSON 객체로 저장함. diaries(배열)에. 그래서 문자열ㄹㄹ로 변환

  return ( //DiaryContext에 값(diaries, addDiary) 넣어줌. > 감싸진  컴포넌트들은 자유롭게 쓸 수 있음.
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children} 
    </DiaryContext.Provider>
  );
};
