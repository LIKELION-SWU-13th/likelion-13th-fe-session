import React, { useState, useEffect } from "react";

function Profile({ img, mood, diary }) {
    const [todayMood, setTodayMood ] = useState(mood);

    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
    };

    useEffect(() => {
        if (todayMood === "행복해") {
            console.log("오늘의 나의 기분은 좋을 거야! 행복하자 😊");
        } else {
            console.log("오늘 슬픈 날이야 😢");
        }
    }, [todayMood]);

    return (
        <div style={{ display: 'inline-block' }}>
            {/*프로필 제목*/}
            <h2 style={{ marginBottom: '10px' }}>내 프로필</h2>
            {/*프로필 카드 박스*/}
            <div style={{
                border: '2px solid #eee',
                borderRadius: '10px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                background: 'white',
                textAlign: 'center'
            }}>
                {/*프로필 이미지*/}
                <img
                    src={img}
                    alt="profile"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '10px',
                    }}
                />
                <p><strong>오늘의 기분:</strong> {todayMood}</p>
                {/*기분 토글 버튼*/}
                <button onClick={toggleMood} style={{
                    marginTop: '10px',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    background: '#f9f9f9'
                }}>
                    기분 바꾸기
                </button>
                {/*일기 표시*/}
                {diary && (
                    <p style={{marginTop: '15px'}}>
                        ✏️ {diary}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Profile;
