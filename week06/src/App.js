import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiaryProvider } from './DiaryContext';
import Home from './pages/Home';
import History from './pages/History';
import Detail from './pages/Detail';
import './App.css';

function App() {
  return (
    <DiaryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </DiaryProvider>
  );
}

export default App;

