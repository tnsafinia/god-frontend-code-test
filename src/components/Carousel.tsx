import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import LinkLearnShop from "./LinkLearnShop";

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
              {/* <img src={i.imageUrl} alt={''} /> */}
              <Image
                key={i.id}
                src={i.imageUrl}
                alt={i.modelName}
                width="400px"
                height="340px"
                //layout="responsive"
              />

              <LinkLearnShop id={i.id}/> 
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
