import React from 'react';

function NoticeBox(props) {
    return (
        <div className = {`notice-box${props.highlight ? " highlight" : ""}`}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default NoticeBox;