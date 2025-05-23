const API_KEY = process.env.REACT_APP_TMDB_API_KEY; 
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTMDBData() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`);
  if (!res.ok) throw new Error("API 호출 실패");
  return res.json();
}
