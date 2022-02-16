import React, { useState } from "react";
import { TextInput, Col, Row } from "vcc-ui";
import CarImage from "./CarImage";
import CarText from "./CarText";
import LinkLearnShop from "./LinkLearnShop";

function Filter(props: { data: any[]; value: string }): JSX.Element {
  const filteredItems = props.data.filter(function (item: {
    bodyType: string;
  }) {
    return item.bodyType == props.value;
  });

  const renderFilteredItems = filteredItems.map(
    (i: { id: React.Key | null | undefined }) => {
      return (
        <Col size={3} key={i.id}>
          <CarText data={i} />
          <CarImage data={i} />
          <LinkLearnShop id={i.id} />
        </Col>
      );
    }
  );

  return (
    <div>
      <Row align="center">{renderFilteredItems}</Row>
    </div>
  );
}
export default Filter;
