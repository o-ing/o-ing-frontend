import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function CardComponent({ width, imgSrc, title, description }) {
  return (
    <Card style={{ width, marginBottom: "20%" }} cover={<img alt={title} src={imgSrc} />}>
      <Meta title={title} description={description} />
    </Card>
  );
}
