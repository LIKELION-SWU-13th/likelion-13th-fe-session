import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
