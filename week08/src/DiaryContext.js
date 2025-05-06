import React, { createContext, useState, useEffect } from "react";

export const DiaryContext = createContext(); {/* Context 객체 생성 */}

{/* Context를 실제로 사용할 수 있게 Provider 컴포넌트 정의 -> 전역 상태에 접근 가능 */}
export function DiaryProvider({ children }) {
  const [entries, setEntries] = useState([]);
  // entries는 일기 데이터를 담는 배열 상태, setEntries는 일기 데이터 변경 함수

  {/* 앱 시작 시(컴포넌트 처음 렌더링) localStorage에서 저장된 데이터를 불러옴 */}
  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  {/* entries가 바뀔 때마다 localStorage에 저장됨 */}
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  {/* children은 <DiaryProvider> 태그 안에 감싸진 컴포넌트들 의미
      이 컴포넌트들에서 value로 넘긴 entries, setEntries를 사용 가능 */}
  return (
    <DiaryContext.Provider value={{ entries, setEntries }}>
      {children}
    </DiaryContext.Provider>
  );
}
export default DiaryProvider;
