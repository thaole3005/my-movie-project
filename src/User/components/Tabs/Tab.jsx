import React from "react";
import { Row, Tabs } from "antd";
import "./Tabs.scss";
import { useSelector } from "react-redux";
import CardMovie from "../CardMovie/CardMovie";

const { TabPane } = Tabs;

const Tab = () => {
  const { listMovies } = useSelector((state) => state.movie);
  const movieComingSoon = listMovies.filter(
    (movie) => movie.dangChieu === false
  );
  const movieShowing = listMovies.filter((movie) => movie.sapChieu === false);
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="1" centered tabBarStyle={{ border: "none" }}>
        <TabPane tab="Đang Chiếu" key="1">
          <Row gutter={[16, 24]}>
            {movieShowing &&
              movieShowing.map((item, index) => {
                return <CardMovie movie={item} key={`movie-card-${index}`} />;
              })}
          </Row>
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2">
          {movieComingSoon && (
            <Row gutter={[16, 24]}>
              {movieComingSoon &&
                movieComingSoon.map((item, index) => {
                  return <CardMovie movie={item} key={`movie-card-${index}`} />;
                })}
            </Row>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;
