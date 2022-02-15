import React, { useState } from "react";
import Image from "next/image";
import { Block, Text, Col, Row, Icon } from "vcc-ui";

function Photo(props: { data: any[] }) {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((i) => {
    return (
      <Col size={3} key={i.id}>
        <Block extend={{ textAlign: "left" }}>
          <Text>{i.bodyType}</Text>
          <Text>{i.modelName}</Text>
          <Text>{i.modelType}</Text>
        </Block>
        <Image
          key={i.id}
          src={i.imageUrl}
          alt={i.modelName}
          width="400px"
          height="340px"
          //layout="responsive"
        />
      </Col>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Row align="center">{renderItems} </Row>

      <Row align="end" aria-label="Page navigation">
        <a href="#" aria-label="Previous" onClick={() => setPage(page - 1)}>
          <Icon type="media-previous-32" />
        </a>

        <a href="#" aria-label="Next" onClick={() => setPage(page + 1)}>
          <Icon type="media-next-32" />
        </a>
      </Row>
    </div>
  );
}
export default Photo;
