import { Col, Row } from "antd";
import React from "react";
import CardComponent from "./CardComponent";

export default function SmallWindowCard({ cardInfos }) {
  return cardInfos.map((cardInfo, idx) => (
    <Row key={idx} style={{ justifyContent: "center" }}>
      <Col>
        <CardComponent width={400} imgSrc={cardInfo.img} title={cardInfo.title} description={cardInfo.description} />
      </Col>
    </Row>
  ));
}
