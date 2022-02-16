import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import LinkLearnShop from "./LinkLearnShop";
import CarText from "./CarText";
import CarImage from "./CarImage";

export default function SimpleSlider(props: { data: any[] }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.data.map((i) => {
          return (
            <div key={i.id}>
              <CarText data={i} />
              <CarImage data={i} />
              <LinkLearnShop id={i.id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
