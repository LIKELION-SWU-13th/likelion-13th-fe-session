import React, { useState } from "react";
import Profile from "./components/profile";
import CardContainer from "./components/CardContainer";
import DiaryInput from "./components/Diary";

function App() {
  const [diary, setDiary] = useState("");

  const handleSaveDiary = (newDiary) => {
    setDiary(newDiary);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CardContainer>
        <div>
          <Profile img="/profile.jpg" mood="행복해" diary={diary} />
          <DiaryInput onSave={handleSaveDiary} />
        </div>
      </CardContainer>
    </div>
  );
}

export default App;
