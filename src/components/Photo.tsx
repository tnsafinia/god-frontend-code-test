import React, { useState } from "react";
import Image from "next/image";
import {
  Block,
  Text,
  Col,
  Row,
  Icon,
  Flex,
  Spacer,
  useTheme,
  View,
} from "vcc-ui";
import LearnShopLink from "./LearnShopLink";

function Photo(props: { data: any[] }) {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const [emptyPage, setEmptyPage] = useState(false);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);
  const theme = useTheme();
  const renderItems = currentItems.map((i) => {
    return (
      <Col size={3} key={i.id}>
        <Block
          extend={{
            textAlign: "left",
            paddingBottom: "1rem",
            paddingTop: "4rem",
          }}
        >
          <Text
            extend={{
              color: theme.color.foreground.secondary,
              fontSize: "1rem",
            }}
          >
            {i.bodyType}
          </Text>
          <Flex extend={{ flexDirection: "row", fontSize: "3rem" }}>
            <Text subStyle="emphasis">{i.modelName}</Text>
            <Spacer />
            <Text extend={{ color: theme.color.foreground.secondary }}>
              {i.modelType}
            </Text>
            <Spacer />
          </Flex>
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
  let lastPage = Number(pageNumbers.slice(-1));
  let firstPage = Number(pageNumbers[0]);

  return (
    <div>
      <Row align="center">{renderItems}</Row>

      <LearnShopLink renderItems={renderItems} />
   

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
  );
}
export default Photo;
