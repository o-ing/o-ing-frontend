import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function LargeWindowCard({ cardInfos }) {
  const [largeInfo, setLargeInfo] = useState(cardInfos);
  useEffect(() => {
    const mapWithTwoCardInfos = (data) => {
      let res = [];
      data.forEach((info, idx) => {
        if (idx % 3 === 0) {
          res.push([info]);
        } else {
          res[res.length - 1] = [...res[res.length - 1], info];
        }
      });
      console.log(res[0], "first");
      console.log(res[0][0], "res");
      console.log(res[0][0].title, "res");
      return res;
    };
    setLargeInfo(mapWithTwoCardInfos(cardInfos));
  }, [cardInfos]);

  return largeInfo.map((cardInfo, idx) => {
    if (cardInfo.length % 3 < 1) {
      return (
        <Row key={idx} gutter={60} justify="center">
          <Col>
            <CardComponent width={350} imgSrc={cardInfo[0].img} title={cardInfo[0].title} description={cardInfo[0].description} />
          </Col>
          <Col>
            <CardComponent width={350} imgSrc={cardInfo[1].img} title={cardInfo[1].title} description={cardInfo[1].description} />
          </Col>
          <Col>
            <CardComponent width={350} imgSrc={cardInfo[2].img} title={cardInfo[2].title} description={cardInfo[2].description} />
          </Col>
        </Row>
      );
    }
    return (
      <Row key={idx} gutter={60} justify="center">
        <Col>
          <CardComponent width={400} imgSrc={cardInfo.img} title={cardInfo.title} description={cardInfo.description} />
        </Col>
        <Col style={{ display: "hidden" }}>
          <CardComponent width={400} imgSrc="" title="" description="" />
        </Col>
        <Col style={{ display: "hidden" }}>
          <CardComponent width={400} imgSrc="" title="" description="" />
        </Col>
      </Row>
    );
  });
}
