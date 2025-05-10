import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiaryProvider } from "./DiaryContext";
import Diary from "./Diary";
import History from "./History";
import Detail from "./Detail";


function App() {
  return (
    <DiaryProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Diary />} /> 
              <Route path="/history" element={<History />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    </DiaryProvider>
  );
}

export default App;
