//기록 목록/ 상세보기
import React, { useContext } from 'react'; //useContext : 일기 리스트 가져오기
import { useParams, Link, useNavigate } from 'react-router-dom'; 
// useParams : URL에서 id 가져오기
// Link, useNavigate : 페이지 이동 도와주는 도구
import { DiaryContext } from './DiaryContext';

const History = ({ detailMode = false }) => { //datailMode : 상세보기 모드인지, 목록 모드인지 구분
  const { diaries } = useContext(DiaryContext); //diaries : 저장된 전체 일기
  const { id } = useParams(); //id : 상세보기 할 대 어떤 일기 id인지 URL에서 가져옴
  const navigate = useNavigate(); //navigate : 페이지 이동 도구


// 상세 보기 모드면 id에 해당하는 일기 찾기, 일기가 없으면 에러 표시
  if (detailMode) {
    const diary = diaries.find((d) => d.id === Number(id));
    if (!diary) return <div>기록을 찾을 수 없습니다.</div>;

// 해당 일기의 상세 내용 보여주고 '목록으로'버튼 누르면 목록 페이지로 이동
    return (
      <div>
        <h2>기록 상세</h2>
        <p>날짜: {diary.date}</p>
        <p>기분: {diary.emotion}</p>
        <p>내용: {diary.content}</p>
        <button onClick={() => navigate('/history')}>목록으로</button>
      </div>
    );
  }

// 목록 모드면 저장된 일기 리스트를 보여준다. 일기를 클릭하면 상세 페이지로 이동할 수 있게 만든다.
  return (
    <div>
      <h2>기록한 감정 목록</h2>
      <ul>
        {diaries.map((diary) => (
          <li key={diary.id}>
            <Link to={`/detail/${diary.id}`}>
              [{diary.date}] {diary.emotion} - {diary.content.slice(0, 10)}...
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
