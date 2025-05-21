import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Animation from './pages/Animation.jsx';
import Drama from './pages/Drama.jsx';
import Entertainment from './pages/Entertainment.jsx';
import Live from './pages/Live.jsx';
import Movie from './pages/Movie.jsx';
import News from './pages/News.jsx';
import Sports from './pages/Sports.jsx';

import './App.css';

function App() {
  return (
    <div className="full-container">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/animation" element={<Animation/>}/>
        <Route path="/drama" element={<Drama/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/live" element={<Live/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/sports" element={<Sports/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
