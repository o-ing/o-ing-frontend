import { Card, Col, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import Meta from "antd/lib/card/Meta";
import useWindowSize, { WINDOW_SIZE_TYPE } from "../hooks/useWindowSize";
import SmallWindowCard from "../component/SmallWindowCard";
import MediumWindowCard from "../component/MediumWindowCard";
import LargeWindowCard from "../component/LargeWindowCard";

export default function Club() {
  const windowSize = useWindowSize();
  useEffect(() => {}, [windowSize]);

  return (
    <div style={{ marginTop: "10%", marginRight: "3%", marginLeft: "3%", justifyContent: "center" }}>
      {windowSize === WINDOW_SIZE_TYPE.SMALL && <SmallWindowCard cardInfos={data} />}
      {windowSize === WINDOW_SIZE_TYPE.MEDIUM && <MediumWindowCard cardInfos={data} />}
      {windowSize === WINDOW_SIZE_TYPE.LARGE && <LargeWindowCard cardInfos={data} />}
    </div>
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
