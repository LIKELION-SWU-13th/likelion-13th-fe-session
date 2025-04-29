import React from "react";
// 행운 획득하기 컴포넌트
function luckyCheer({ luckyMessage }) {
    return (
        <button className="luckyButton" onClick={luckyMessage}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '10px',
                padding: '10px'
            }}>
            🍀 행운 누르고 가기
        </button>
    );
}
export default luckyCheer;