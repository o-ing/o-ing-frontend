import React from "react";
import CardComponent from "../component/CardComponent";

import styled from "styled-components";
import { Col, Row } from "antd";

export default function Club() {
  return (
    <Wrapper>
      <Row gutter={30}>
        {data.map((item) => (
          <T offset={30} span={8}>
            <CardComponent imgSrc={item.img} title={item.title} description={item.description} />
          </T>
        ))}
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
`;
const T = styled(Col)`
  @media (max-width: 600px) {
    ${(props) => (props.span = 24)}
  }
  ${(props) => (props.span = 8)}
`;
// margin-top: 100px;
// display: flex;
// flex-wrap: wrap;
// justify-content: flex-start;
// @media screen and (max-width: 580px) {
//   justify-content: center;
//   text-align: center;
// }
