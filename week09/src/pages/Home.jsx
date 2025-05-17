import React from 'react';
import './Home.css';
import Header from "../components/Header"

function Home() {
  return (
    <div className="main-bg">
      <div className='overlay'></div>
       <Header />

      <div className="home-content">
        <h1>Welcome to Netflix</h1>
        <h4>Success In Login 🏳‍🌈</h4>
        <p>여기는 홈입니다.</p>
      </div>
    </div>
  );
}

export default Home;
