import React, { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";
import ContentSection from "../components/ContentSection";
import { fetchTMDBData } from "../utils/api";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HomePage() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchTMDBData()
      .then(data => {
        if (data.results && data.results.length > 0) {
          const bannersData = data.results.slice(0, 5).map(movie => ({
            imageUrl: IMAGE_BASE_URL + movie.poster_path,
            title: movie.title,
          }));
          setBanners(bannersData);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="banner-list">
        {banners.map((banner, index) => (
          <MainBanner
            key={index}
            imageUrl={banner.imageUrl}
            title={banner.title}
          />
        ))}
      </div>
      <ContentSection />
    </>
  );
}

export default HomePage;
