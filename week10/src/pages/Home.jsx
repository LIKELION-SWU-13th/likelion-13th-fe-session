import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";

import background1 from "../assets/background1.jpg";
import title1 from "../assets/title1.png";
import background2 from "../assets/background2.jpg";
import title2 from "../assets/title2.png";
import background3 from "../assets/background3.jpg";
import title3 from "../assets/title3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const bannerList = [
    {
      backgroundImage: background1,
      titleImage: title1,
    },
    {
      backgroundImage: background2,
      titleImage: title2,
    },
    {
      backgroundImage: background3,
      titleImage: title3,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Header />
      <Slider {...settings}>
        {bannerList.map((data, i) => (
          <Banner key={i} {...data} />
        ))}
      </Slider>
      <Card cardtitle="오직 넷플릭스에서만" />
      <Card cardtitle="한국어 화면 해설" />
      <Card cardtitle="다시보기 추천 콘텐츠" />
      <Card cardtitle="내가 찜한 리스트" />
    </div>
  );
}

export default Home;
