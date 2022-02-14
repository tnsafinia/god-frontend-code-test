import React, { useState } from "react";

function Photo(props: { data: any[] }) {
  const [data, setData] = useState({ ...props.data });
  return (
    <div>
      {props.data.map((i) => (
        <figure key={i}>
          <img src={i.imageUrl} />
        </figure>
      ))}
    </div>
  );
}
export default Photo;
