import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import OrderTicker from "../../components/OrderTicket/OrderTicket";
import Tab from "../../components/Tabs/Tab";
import MultiTab from "../../components/MultiTab/MultiTab";
import "./HomePage.scss";
import News from "../../components/News/News";

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <OrderTicker />
      <Tab />
      <MultiTab />
      <News />
    </div>
  );
};

export default HomePage;
