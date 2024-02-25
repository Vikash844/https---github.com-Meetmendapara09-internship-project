import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
//return funtion
  return (
    <Slider {...settings} className="mx-20 mt-5">
      <div className="bg-purple-300 px-5 py-10 rounded ">
        <h3 className="text-center">Question 1</h3>
      </div>
      <div className="bg-purple-300 px-5 py-10 rounded">
        <h3 className="text-center">Question 2</h3>
      </div>
      <div className="bg-purple-300 px-5 py-10 rounded">
        <h3 className="text-center">Question 3</h3>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
