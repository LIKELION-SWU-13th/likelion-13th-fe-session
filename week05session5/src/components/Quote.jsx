import React from "react";

function Quote({ mood }) {
    const message = 
        mood === "행복해"
            ? "오늘도 웃을 일이 가득할거야 😘"
            : "괜찮아, 내일은 더 좋아질거야 🌟"

    return <p style={{ fontStyle: "italic" }}>{message}</p>
}

export default Quote;