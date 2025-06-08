//오늘의 기분 일기 작성
import React, { useState, useContext } from 'react'; 
// useState : 새 일기 쓸 수 있게
// useContext : 일기 저장을 위해
import { useNavigate } from 'react-router-dom';
// useNevigate : 저장 후 페이지 이동하려고
import { DiaryContext } from './DiaryContext';

const Home = () => {
  const [emotion, setEmotion] = useState('happy'); //emotion : 선택한 기분
  const [content, setContent] = useState(''); //content : 작성한 일기 내용
  const { addDiary } = useContext(DiaryContext); // addDiary : 전역 저장소에 새 일기 추가하는 함수
  const navigate = useNavigate(); // nevigate : 페이지 이동 도구

  const handleSubmit = () => {
    if (!content.trim()) return;
    addDiary({ date: new Date().toISOString().slice(0, 10), emotion, content });
    setContent('');
    navigate('/history');
  };
  //내용이 비어있지 않으면
  //일기를 추가하고
  //작성 끝나면 /history로 이동

  return (
    <div>
      <h2>오늘의 기분을 기록해보세요</h2>
      <div>
        <button onClick={() => setEmotion('happy')}>😊</button>
        <button onClick={() => setEmotion('soso')}>😐</button>
        <button onClick={() => setEmotion('sad')}>😢</button>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="오늘 있었던 일을 간단히 써보세요"
      />
      <button onClick={handleSubmit}>기록하기</button>
    </div>
  );

  //버튼으로 기분 선택
  //텍스트에 오늘 일기 작성
  //기록하기 버튼 누르면 저장하고 이동
};

export default Home;
