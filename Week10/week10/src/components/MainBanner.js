import React from "react";
import "../styles/MainBanner.css";

function MainBanner({ imageUrl, title }) {
  if (!imageUrl) return null;

  return (
    <section className="main-banner">
      <div className="banner-text">
        <span className="badge">새로운</span>
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">평범하지만 조금은 엉뚱한 우리집 이야기</p>
      </div>
      <div className="banner-img">
        <img src={imageUrl} alt={title} />
      </div>
    </section>
  );
}

export default MainBanner;
