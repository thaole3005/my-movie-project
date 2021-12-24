import { Button, Card, Col, Rate } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useHistory } from "react-router-dom";
import "./CardMovie.scss";

const CardMovie = ({ movie }) => {
  const history = useHistory();

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4} className="card">
      <Card
        className="cardMovie"
        style={{ width: "100%" }}
        cover={
          <img alt="example" src={movie.hinhAnh} className="cardMovie-image" />
        }
      >
        <Meta title={movie.tenPhim} description={movie.moTa} />
        <Button
          className="cardMovie-button"
          onClick={() => {
            history.push(`moviedetail/${movie.maPhim}`);
          }}
        >
          {" "}
          mua vé
        </Button>
      </Card>
      <div className="card-rate">
        <p>5</p>
        <Rate defaultValue={5} disabled style={{ fontSize: "0.5rem" }} />
      </div>
    </Col>
  );
};

export default CardMovie;
