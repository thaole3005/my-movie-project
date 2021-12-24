import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

import "../News.scss";

import { LIST_NEWS } from "../constant";

const CardNews = () => {
  return (
    <div className="cardNews">
      {LIST_NEWS &&
        LIST_NEWS.map((item, index) => {
          return (
            <Card
              hoverable
              key={`card-${index}`}
              style={{ width: 300 }}
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.src} description={item.desscription} />
            </Card>
          );
        })}
    </div>
  );
};

export default CardNews;
