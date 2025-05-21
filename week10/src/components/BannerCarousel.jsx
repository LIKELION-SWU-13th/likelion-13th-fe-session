import React from "react";
import Slider from "react-slick";
import "./BannerCarousel.css";

const images = [
    '/banner1.webp',
    '/banner2.webp',
    '/banner3.webp'
];

function BannerCarousel() {
    const settiong = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidersToShow: 1,
        slidersToScroll: 1
    };

    return (
        <Slider {...settiong} className="banner_carousel">
            {images.map((src, index) => (
                <img src={src} alt={`banner-${index}`} key={index} className="banner_img" />
            ))}
        </Slider>
    );
}

export default BannerCarousel;