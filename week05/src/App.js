import React from "react";
import Profile from "./components/profile";
import img from "./assets/image1.png";


function App() {
  return (
     <div>
      <Profile
      img={img}
      mood="행복해"
      />
     </div>
  )
}

export default App;
