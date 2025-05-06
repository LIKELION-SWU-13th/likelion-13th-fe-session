import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DiaryContext } from "./DiaryContext";

function List() {
    const { diaries } = useContext(DiaryContext);
    const navigate = useNavigate();
    
    return (
        <div style={{ margin: "30px" }}>
            <h2>기록한 감정 목록</h2>
            <ul>
                {diaries.map((item) => (
                    <li key = {item.id}>
                       <Link to = {`/detail/${item.id}`} className="link-item">
                        [{item.date}] {item.moodLabel} - {item.text.length > 20 ? item.text.slice(0, 20) + "..." : item.text} 
                       </Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate("/")} className = "button">홈으로</button>
        </div>
    );
}

export default List;