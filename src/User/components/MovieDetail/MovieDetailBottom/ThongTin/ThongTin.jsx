import React from "react";
import {useSelector } from "react-redux";
import moment from "moment";
import { Row, Col } from "antd";
import "./ThongTin.scss";

export default function ThongTin() {
  const { movieInfor } = useSelector((state) => state.movie);

  return (
    <div className="thongtin custom_container">
      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="thong_tin_first">
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <ul>
                    <li>
                        <p>Tên phim</p>
                    </li>
                    <li>
                        <p>Ngày công chiếu</p>
                    </li>
                    <li>
                        <p>Đạo diễn</p>
                    </li>
                    <li>
                        <p>Diễn viên</p>
                    </li>
                    <li>
                        <p>Thể loại</p>
                    </li>
                    <li>
                        <p>Định dạng</p>
                    </li>
                    <li>
                        <p>Quốc Gia</p>
                    </li>
                </ul>
              </Col>
              <Col className="gutter-row" span={12}>
                <ul>
                    <li>
                        <p>{movieInfor.tenPhim}</p>
                    </li>
                    <li>
                        <p>{moment(movieInfor.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
                    </li>
                    <li>
                        <p>Đạo Diễn 1</p>
                    </li>
                    <li>
                        <p>Diễn Viên A, B, C</p>
                    </li>
                    <li>
                        <p>Hành Động</p>
                    </li>
                    <li>
                        <p>2D/Digital</p>
                    </li>
                    <li>
                        <p>USA</p>
                    </li>
                </ul>
              </Col>
            </Row>
            
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div>
              <h2>NỘI DUNG</h2>
              <p>
                {movieInfor.moTa}
             </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
