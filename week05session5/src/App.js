import React from "react";
import Profile from "./components/profile";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
      backgroundColor: "#f0ff8ff",
      /*minHeight: "100vh",*/
      padding: "20px"
    }}>
      <Profile
        happyImg="/happy.png"
        sadImg="/sad.png"
        mood="행복해"
      />
      <Profile
        happyImg="/happy2.png"
        sadImg="/sad2.png"
        mood="슬퍼"
      />

    </div>

  );

}
export default App;