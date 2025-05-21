
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Drama from './pages/Drama';
import Movie from './pages/Movie';
import Entertainment from './pages/Entertainment';
import Ani from './pages/Ani';

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#1b1b1b', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/ani" element={<Ani />} />

      </Routes>
    </div>
  );
};

export default App;