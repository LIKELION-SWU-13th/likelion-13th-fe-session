import React from "react";
import Profile from "./components/profile";
import profileImg from './img/park.png';


function App() {
  return (
    <div>
      <Profile img={profileImg} mood={":)"}></Profile>
    </div>
  )
}

export default App;
