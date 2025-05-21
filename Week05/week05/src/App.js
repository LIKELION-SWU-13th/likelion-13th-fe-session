import React from "react";
import Profile from "./components/profile"; 
import Diary from "./components/diary";
import Fight from "./components/fighting";

function App() {


  
  return (
    
    <div style={{  padding: '20px',
      textAlign:'center',
      backgroundColor: '#f9f9fb',
      fontFamily: 'pretendard, sans-serif',
      margin: '40px auto',
      borderRadius: '12px',
      maxWidth: '700px'}}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>내 프로필</h2>
      <Profile 
        img="/jieun.png" 
        mood="행복해" 
      /> 
      <Diary/>
     <Fight/>
      </div>
  );
}

export default App;
