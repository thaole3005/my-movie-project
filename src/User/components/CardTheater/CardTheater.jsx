import { Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./CardTheater.scss";

const CardTheater = ({ theater }) => {
  return (
    <div className="cardTheater">
      <Space className="cardContainer">
        <img src={theater.hinhAnh} alt="theater-imag" />
        <div className="cardContent">
          <h4>{theater.tenCumRap}</h4>
          <p>{theater.diaChi}</p>
          <Link to="/">[chi tiết]</Link>
        </div>
      </Space>
    </div>
  );
};

export default CardTheater;
