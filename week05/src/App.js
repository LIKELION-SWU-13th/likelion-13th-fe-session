import React from "react";
import Profile from "./components/profile";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Greeting name="예원" />
      <Profile
      img="https://i.pravatar.cc/150?img=2"
      mood="행복해"
      />
      <Footer />
    </div>
  );
}

export default App;
