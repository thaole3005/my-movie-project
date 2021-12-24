import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./Carousel.scss";

const Carousel = () => {
  const { listBanners } = useSelector((state) => state.movie);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderListCarousel = (data) => {
    return data.map((item, index) => {
      return (
        <div className="carousel-item" key={`carousel-item-${index}`}>
          <a href="/">
            <img src={item.hinhAnh} alt="carousel-img" />
          </a>
          <div className="carousel-play">
            <img
              src="https://tix.vn/app/assets/img/icons/play-video.png"
              alt="button-play"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Slider {...settings} className="carousel">
      {renderListCarousel(listBanners)}
    </Slider>
  );
};

export default Carousel;
