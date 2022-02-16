import React, { useState } from "react";
import { Col, Row, Icon, View } from "vcc-ui";

import CarImage from "./CarImage";
import CarText from "./CarText";
import LinkLearnShop from "./LinkLearnShop";

function DesktopView(props: { data: any[] }) {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [emptyPage, setEmptyPage] = useState(false);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((i) => {
    return (
      <Col size={3} key={i.id}>
        <CarText data={i} />
        <CarImage data={i} />
        <LinkLearnShop id={i.id} />
      </Col>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  let lastPage = Number(pageNumbers.slice(-1));
  let firstPage = Number(pageNumbers[0]);

  return (
    <div>
      <div>
        <Row align="center">{renderItems}</Row>

        {page > lastPage || page < firstPage ? setEmptyPage(true) : ""}
        <View paddingRight={1} paddingTop={3}>
          <Row align="end" aria-label="Page navigation">
            {!emptyPage ? (
              <a
                href="#"
                aria-label="Previous"
                onClick={() => {
                  page === firstPage ? setPage(lastPage) : setPage(page - 1);
                }}
              >
                <Icon type="media-previous-32" />
              </a>
            ) : (
              (setPage(lastPage), setEmptyPage(false))
            )}
            {!emptyPage ? (
              <a href="#" aria-label="Next" onClick={() => setPage(page + 1)}>
                <Icon type="media-next-32" />
              </a>
            ) : (
              (setPage(firstPage), setEmptyPage(false))
            )}
          </Row>
        </View>
      </div>
    </div>
  );
}
export default DesktopView;
