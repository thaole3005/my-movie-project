import { Space } from "antd";
import moment from "moment";
import React from "react";
import "./DetailCalMovie.scss";

const DetailCalMovie = ({ movie }) => {
  const lichChieuTheoPhim = movie.lstLichChieuTheoPhim.slice(0, 4);

  return (
    <div className="detailCalMovie">
      <div className="detailCalMovie-container">
        <Space className="detailCalMovie-infor">
          <img
            src={movie.hinhAnh}
            alt={movie.tenPhim}
            className="detailCalMovie-image"
          />
          <div className="detailCalMovie-content">
            <Space>
              <h3>{movie.tenPhim}</h3> {movie.hot && <span>HOT</span>}
            </Space>
            <p>120 phút - TIX 9.1 - IMDb 0</p>

            <div className="detailCalMovie-time">
              {lichChieuTheoPhim &&
                lichChieuTheoPhim.map((item, index) => (
                  <p key={`item-${index}`}>
                    {item.tenRap}:
                    {moment(item.ngayChieuGioChieu).format("hh~mm ")}
                  </p>
                ))}
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default DetailCalMovie;
