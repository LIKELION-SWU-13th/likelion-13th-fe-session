import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Entertainment from './pages/Entertainment';
import Drama from './pages/Drama';
import Movie from './pages/Movie';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;