import React from "react";

function MoodImage({ mood, happyImg, sadImg }) {
    const imgSrc = mood === "행복해" ? happyImg : sadImg;

    return (
        <img
            src={imgSrc}
            alt="mood"
            style={{ width: "100px", height: "100px", borderRadius: "50%"}}
        />

    );
}

export default MoodImage;