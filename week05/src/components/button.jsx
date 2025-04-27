import React from "react";

function Button({ onClick, children, style }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: "9px 18px",
        margin: "4px",
        marginTop: "8px",
        borderRadius: "7px",
        border: "none",
        backgroundColor: "lightpink",
        color: "white",
        cursor: "pointer",
        fontSize: "13px",
        ...style // 전달받은 스타일이 덮어쓰이도록
      }}
    >
      {children}
    </button>
  );
}

export default Button;
