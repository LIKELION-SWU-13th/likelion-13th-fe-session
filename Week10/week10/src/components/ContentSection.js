import React, { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import { fetchTMDBData } from "../utils/api";
import "../styles/ContentSection.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


const sections = [
  { id: "popular", title: "인기 영화" },
  { id: "now_playing", title: "상영 중인 영화" },
  { id: "upcoming", title: "개봉 예정 영화" },
  { id: "top_rated", title: "평점 높은 영화" },
  { id: "trending", title: "오늘의 인기 컨텐츠" },
];

function ContentSection() {
  const [itemsBySection, setItemsBySection] = useState({});

  useEffect(() => {
    
    fetchTMDBData()
      .then(data => {
        if (data.results) {
          const itemsMap = {};
          sections.forEach(section => {
            itemsMap[section.id] = data.results;
          });
          setItemsBySection(itemsMap);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="content-section-wrapper">
      {sections.map(section => (
        <section key={section.id} className="editor-recommend">
          <h2>{section.title}</h2>
          <div className="recommend-list">
            {(itemsBySection[section.id] || []).map(item => (
              <ContentCard
                key={item.id}
                title={item.title}
                imageUrl={IMAGE_BASE_URL + item.poster_path}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ContentSection;
