import React from "react";

//추가 컴포넌트2: 프로필 카드 내 오늘의 문장 띄우기 위한 컴포넌트
function TodaySentence({ sentence, setSentence }) {
  const handleChange = (e) => {
    setSentence(e.target.value);
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="오늘을 한 줄로 표현해보세요!"
        style={{
            border: "none",
            borderBottom: "2px solid #ccc",
            outline: "none",
            padding: "10px",
            fontSize: "16px",
            width: "80%",
            minWidth: "400px"}}
          onFocus={(e) => e.target.style.borderBottom = "2px solid #FF7043"}
        />
    </div>
  );
}

export default TodaySentence;
