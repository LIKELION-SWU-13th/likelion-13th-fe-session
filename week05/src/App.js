import React from 'react';
import Profile from "./components/profile";

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>
        내 프로필
      </h1>
      <Profile
        happyImg="/happy.jpeg"
        sadImg="/sad.jpeg"
        mood="행복해"
      />
    </div>
  );
}
export default App;
