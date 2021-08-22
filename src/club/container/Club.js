import React, { useEffect } from "react";
import CardComponent from "../component/CardComponent";

import styled from "styled-components";
import { Col, Row } from "antd";
import { useWindowSizeObserver } from "../hooks/useWindowSizeObserver";

export default function Club() {
  const size = useWindowSizeObserver();
  useEffect(() => {
    console.log(size, "club");
  }, [size]);

  return (
    <Wrapper>
      <Row gutter={30}>
        {data.map((item, idx) => {
          if (size === "large") {
            return (
              <Col key={idx} offset={30} span={8}>
                <CardComponent imgSrc={item.img} title={item.title} description={item.description} />
              </Col>
            );
          } else if (size === "middle") {
            return (
              <Col key={idx} offset={30} span={12}>
                <CardComponent imgSrc={item.img} title={item.title} description={item.description} />
              </Col>
            );
          }
          return (
            <Col key={idx} offset={30} span={24}>
              <CardComponent imgSrc={item.img} title={item.title} description={item.description} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}

const data = [
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title1",
    description: "11111111111",
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title2",
    description: "222222222222",
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title3",
    description: "3333333333333",
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title4",
    description: "444444444444444",
  },
  {
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "Card title5",
    description: "55555555555555555555",
  },
];

const Wrapper = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1200px) {
    width: 900px;
  }
  @media (max-width: 918px) {
    width: 400px;
  }
`;
