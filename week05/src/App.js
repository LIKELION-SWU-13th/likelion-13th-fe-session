import React from "react";
import Profile from "./components/profile";

function App() {
  return (
    <div>
      <Profile //컴포넌트 사용(호출)
        img="https://i.pinimg.com/736x/b1/6d/21/b16d21926a4d0a691eb843114e519e59.jpg"
        mood="행복해😄"
      />
    </div>
  );
}

export default App;
