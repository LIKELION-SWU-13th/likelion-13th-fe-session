import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Detail from "./Detail";
import { DiaryProvider } from "./DiaryContext";

function App() {
  return (
      <BrowserRouter>
        <DiaryProvider>
          <Routes>
            <Route path = "/" element={<Home />} /> 
            <Route path="/history" element={<List />} />
            <Route path = "/detail/:id" element={<Detail />} /> 
          </Routes>
        </DiaryProvider>
      </BrowserRouter>
      
  );
}

export default App;
