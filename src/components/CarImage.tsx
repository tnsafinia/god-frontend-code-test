import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";


export default function CarImage(data: any) {

  return (
    <div>
      <div key={data.data.id}>
        <Image
          key={data.data.id}
          src={data.data.imageUrl}
          alt={data.data.modelName}
          width="400px"
          height="340px"
        />
      </div>
    </div>
  );
}
