import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import styled from "styled-components";

export default function CardComponent({ imgSrc, title, description }) {
  return (
    <Card style={{ marginBottom: "30%" }} cover={<img alt={title} src={imgSrc} />}>
      <Meta title={title} description={description} />
    </Card>
  );
}
