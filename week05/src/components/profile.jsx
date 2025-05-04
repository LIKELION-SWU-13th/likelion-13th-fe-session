import React, {useState, useEffect } from "react";
import Cheer from "./cheer";
import LuckyCheer from "./luckyCheer";

function Profile({ happyImg, sadImg, mood}) {
    const [todayMood, setTodayMood] = useState(mood);
    const [todayImg, setTodayImg] = useState(happyImg); // 이미지 상태 추가

    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
    };
    
    // 기분에 맞는 이미지로 바꿔주기
    useEffect(() => {
        if(todayMood === "행복해")
            setTodayImg(happyImg);
        else
            setTodayImg(sadImg);
    }, [todayMood, happyImg, sadImg]);

    useEffect(() => {
        console.log("오늘의 나의 기분은 좋을 거야! 행복하자 😍");
    }, []);

    // 응원 메세지 컴포넌트
    const cheer = () => alert(todayMood === "행복해" ? "내일도 행복해!" : "집 가서 푹 쉬어!");
    // 행운 획득하기 컴포넌트
    const lucky = () => alert("당신은 내일의 행운을 획득하셨습니다.");
    
    return (
        <div className="feelProfile">
            <img src={todayImg} alt="프로필사진" className="todayImage"></img>
            <h2>오늘의 기분: {todayMood}</h2>
            <div>
                <button className="button" onClick={toggleMood}>기분 바꾸기</button> 
            </div>
            <div className="button2">
                <Cheer cheerMessage={cheer} /> 
            </div>
            <div>
                <LuckyCheer luckyMessage={lucky} />
            </div>
        </div>
    );
}
export default Profile;