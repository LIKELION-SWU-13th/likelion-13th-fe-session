import React from "react";
// 응원 메세지 컴포넌트
function Cheer({ cheerMessage }) {
    return (
        <button className="messageButton" onClick={cheerMessage}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '10px',
                padding: '10px'
            }}>
            오늘의 응원메세지
        </button>
    );
}
export default Cheer;