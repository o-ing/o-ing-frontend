import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import styled from "styled-components";

export default function CardComponent({ imgSrc, title, description }) {
  return (
    <T cover={<img alt={title} src={imgSrc} />}>
      <Meta title={title} description={description} />
    </T>
  );
}

const T = styled(Card)`
  margin-left: calc((100% - (20% * 4)) / 4);
  margin-bottom: 100px;
  @media screen and (max-width: 580px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
