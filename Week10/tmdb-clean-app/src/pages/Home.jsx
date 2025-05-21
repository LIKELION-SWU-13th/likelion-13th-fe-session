import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContentSlider from "../components/ContentSlider";
import SideSlider from "../components/SideSlider";
import TopSlider from "../components/TopSlider";

function Home(){
    return(
      <>
      <ContentSlider/>
      <TopSlider/>
      <SideSlider title="티빙에서 인기 급상승 콘텐츠" />
      <SideSlider title="심장을 두드린 그때 그 드라마" />
      <SideSlider title="로맨스 시리즈" />
      </>
    );

}
export default Home;
