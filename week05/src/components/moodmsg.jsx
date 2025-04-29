function MoodMessage({ mood }) {
    if (mood === "행복해") {
      return <p>😊 오늘도 좋은 하루 되세요!</p>;
    } else {
      return <p>😢 기분 전환이 필요해 보여요!</p>;
    }
  }
  
  export default MoodMessage;
  