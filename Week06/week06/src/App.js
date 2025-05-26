import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import History from './History';
import { DiaryProvider } from './DiaryProvider';

function App() {
  return (
    <DiaryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<History detailMode={true} />} />
        </Routes>
      </Router>
    </DiaryProvider>
  );
}

export default App;