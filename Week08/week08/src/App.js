import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Detail from "./Detail";

function App() {
  return (
    <div className="container">
      <h1>기분 일기장 😊</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;