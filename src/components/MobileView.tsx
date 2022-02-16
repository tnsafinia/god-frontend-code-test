import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import LinkLearnShop from "./LinkLearnShop";
import CarText from "./CarText";
import CarImage from "./CarImage";
import { TextInput } from "vcc-ui";

export default function SimpleSlider(props: { data: any[] }) {
  const [value, setValue] = useState("");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
  };

  const filteredItems = props.data.filter(function (item) {
    return item.bodyType == value;
  });

  return (
    <div>
      <TextInput
        value={value}
        placeholder="Filter by bodyType..."
        type="bodyType"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Slider {...settings}>
        {value === ""
          ? props.data.map((i) => {
              return (
                <div key={i.id}>
                  <CarText data={i} />
                  <CarImage data={i} />
                  <LinkLearnShop id={i.id} />
                </div>
              );
            })
          : filteredItems.map((i) => {
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
