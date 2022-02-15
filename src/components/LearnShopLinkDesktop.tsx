import React from "react";
import { Col, Row} from "vcc-ui";
import LinkLearnShop from "./LinkLearnShop";

function LearnShopLinkDesktop(props: { renderItems: any[] }) {
  const renderItems = props.renderItems.map((i) => {
    return (
      <Col size={3} key={i.key}>
        {/* <Row align="center">
          <Link href={`/learn/${i.key}`} arrow="right">
            Learn
          </Link>
          <Spacer />
          <Spacer />
          <Spacer />
          <Link href={`/shop/${i.key}`} arrow="right">
            Shop
          </Link>
        </Row> */}
        <LinkLearnShop id={i.key}/> 
      </Col>
    );
  });

  return <Row>{renderItems}</Row>;
}
export default LearnShopLinkDesktop;
