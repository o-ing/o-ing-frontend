import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function MediumWindowCard({ cardInfos }) {
  const [mediumInfo, setMediumInfo] = useState(cardInfos);
  useEffect(() => {
    const mapWithTwoCardInfos = (data) => {
      console.log("meidum");
      let res = [];
      data.forEach((info, idx) => {
        if (idx % 2 < 1) {
          res.push([info]);
        } else {
          res[res.length - 1] = [...res[res.length - 1], info];
        }
      });
      return res;
    };
    setMediumInfo(mapWithTwoCardInfos(cardInfos));
  }, [cardInfos]);

  return mediumInfo.map((cardInfo, idx) => {
    if (cardInfo.length % 2 < 1) {
      return (
        <Row key={idx} gutter={60}>
          <Col>
            <CardComponent width={250} imgSrc={cardInfo[0].img} title={cardInfo[0].title} description={cardInfo[0].description} />
          </Col>
          <Col>
            <CardComponent width={250} imgSrc={cardInfo[1].img} title={cardInfo[1].title} description={cardInfo[1].description} />
          </Col>
        </Row>
      );
    }
    return (
      <Row key={idx} gutter={60}>
        <Col>
          <CardComponent width={250} imgSrc={cardInfo.img} title={cardInfo.title} description={cardInfo.description} />
        </Col>
        <Col style={{ display: "hidden" }}>
          <CardComponent width={250} imgSrc="" title="" description="" />
        </Col>
      </Row>
    );
  });
}
