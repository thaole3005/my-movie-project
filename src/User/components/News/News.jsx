import { Tabs } from "antd";
import React from "react";
import CardNews from "./partials/CardNews";

const { TabPane } = Tabs;

const News = () => {
  return (
    <div className="news">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Điện ảnh 24h" key="1">
          <CardNews />
        </TabPane>
        <TabPane tab="Review" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Khuyến mãi" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default News;
