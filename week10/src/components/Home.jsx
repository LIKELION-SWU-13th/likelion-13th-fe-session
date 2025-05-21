import React from "react";
import BannerCarousel from "./BannerCarousel";
import ContentSection from "./ContentSection";

function Home() {
    return (
        <div>
            <BannerCarousel />
            <ContentSection
                title="믿고 보는 웨이브 에디터 추천작"
                fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`}
            />

            <ContentSection 
                title="살시간 인기 콘텐츠" 
                fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`}
            />
        
            <ContentSection 
                title="오직 웨이브에서" 
                fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`}
            />

            <ContentSection 
                title="최신 영화" 
                fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`}
            />

            <ContentSection 
                title="사랑을 찾아가는 여자들의 이야기" 
                fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`}
            />
        </div>
    );
}

export default Home;