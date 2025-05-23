import React from "react";
import "../styles/ContentCard.css";

function ContentCard({ title, imageUrl }) {
  return (
    <div className="recommend-item">
      <img src={imageUrl} alt={title} loading="lazy" />
      <div className="recommend-title">{title}</div>
    </div>
  );
}

export default ContentCard;
