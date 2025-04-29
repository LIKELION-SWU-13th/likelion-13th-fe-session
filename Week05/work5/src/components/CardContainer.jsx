import React from "react";

function CardContainer({ children }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap'
    }}>
      {children}
    </div>
  );
}

export default CardContainer;
