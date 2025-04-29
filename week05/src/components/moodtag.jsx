function MoodTag({ mood }) {
    const style = {
      color: mood === "행복해" ? "pink" : "blue",
      fontWeight: "bold"
    };
  
    return <span style={style}>{mood}</span>;
  }
  
  export default MoodTag;
  