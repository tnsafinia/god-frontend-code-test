import React from "react";
import { Link, Row, Spacer } from "vcc-ui";

function LinkLearnShop (id: any) {

    return (
      
        <Row align="center">
          <Link href={`/learn/${id.id}`} arrow="right">
            Learn
          </Link>
          <Spacer />
          <Spacer />
          <Spacer />
          <Link href={`/shop/${id.id}`} arrow="right">
            Shop
          </Link>
        </Row>

    );

}
export default LinkLearnShop;