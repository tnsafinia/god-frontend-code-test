import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Block, Text, Flex, Spacer, useTheme } from "vcc-ui";

export default function CarText(data: any) {
  const theme = useTheme();
  return (
    <div>
      <div key={data.data.id}>
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
            {data.data.bodyType}
          </Text>
          <Flex extend={{ flexDirection: "row", fontSize: "3rem" }}>
            <Text subStyle="emphasis">{data.data.modelName}</Text>
            <Spacer />
            <Text extend={{ color: theme.color.foreground.secondary }}>
              {data.data.modelType}
            </Text>
            <Spacer />
          </Flex>
        </Block>
      </div>
    </div>
  );
}
