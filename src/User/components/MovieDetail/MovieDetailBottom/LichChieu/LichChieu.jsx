import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Radio, Space } from "antd";
import "./LichChieu.scss";
import { useRouteMatch } from "react-router-dom";
import {
  getTheaterInfoByMaHtr,
  getTheaterByMovieId,
} from "./../../../../../Redux/thunk/theater.thunk";
import { Collapse } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { CalendarOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function LichChieu() {
  const { theaterSystem, showtimesMovie, theaterSystemShowtimeInfor } =
    useSelector((state) => state.theater);
  const { movieInfor } = useSelector((state) => state.movie);

  // console.log("theaterSystem", theaterSystem);
  //   console.log("showtimesMovie", showtimesMovie);
  // console.log("theaterSystemShowtimeInfor",theaterSystemShowtimeInfor);

  const [maHtrSelect, setMaHtrSelect] = useState("BHDStar");
  const [htrSelectShowtime, setHtrSelectShowtime] = useState([]);
  console.log("htrSelectShowtime", htrSelectShowtime);

  const dispatch = useDispatch();
  const match = useRouteMatch();
  // console.log("match", match);

  useEffect(async () => {
    await dispatch(getTheaterInfoByMaHtr());

    const { movieId } = match.params;
    await dispatch(getTheaterByMovieId(movieId));

    // dispatch(getTheaterSystemShowtimeInfor())
  }, []);

  useEffect(async () => {
    // console.log("helo");
    const arrHtrSelectShowtime = [];

    if (Object.keys(showtimesMovie).length !== 0) {
      // console.log("testttt");
      showtimesMovie.heThongRapChieu.forEach((htr) => {
        if (htr.maHeThongRap === maHtrSelect) {
          arrHtrSelectShowtime.push(htr);
        }
      });
      // console.log("arrHtrSelectShowtime", arrHtrSelectShowtime);
      setHtrSelectShowtime(arrHtrSelectShowtime);
    }
  }, [showtimesMovie, maHtrSelect]);

  const changeActiveTab = (activeKey) => {
    console.log("activeKey", activeKey);
    setMaHtrSelect(activeKey);
  };

  function callback(key) {
    console.log(key);
  }

  const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

  const renderInforLichChieu = () => {
    if (htrSelectShowtime.length > 0) {
      return htrSelectShowtime.map((htr, index) => {
        return (
          <div key={index}>
            <Collapse onChange={callback}>
              {htr.cumRapChieu.map((cumRap, index) => {
                return (
                  <Panel
                    header={
                      <div className="lichchieu_collapse">
                        <img
                          src={showtimesMovie.hinhAnh}
                          style={{ width: 50, height: 50 }}
                        />
                        <p className="lichchieu_collapse_adress">
                          {cumRap.diaChi}
                        </p>
                      </div>
                    }
                    key={`cumRap-${index}`}
                  >
                    <div>
                      {
                        <div className="infor_phim_item">
                          <p>2D Digitial</p>
                          <div className="lich_chieu_list">
                            <Row gutter={[16, 16]}>
                                {
                                    cumRap.lichChieuPhim.slice(0, 10).map((lichChieuItem, index) => {
                                        return <Col className="gutter-row"  xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <div className="lich_chieu_item">
                                          <span className="lich_chieu_span">
                                            <CalendarOutlined
                                              style={{ fontSize: 18 }}
                                            />
                                            <NavLink
                                              to={`/ticketroom/${lichChieuItem.maLichChieu}`}
                                              className="lich_chieu_navlink"
                                            >
                                              {moment(
                                                lichChieuItem.ngayChieuGioChieu
                                              ).format("DD/MM/YYYY hh:mm A")}
                                            </NavLink>
                                          </span>
                                        </div>
                                      </Col>
                                    })
                                }
                              
                            </Row>
                           
                          </div>
                        </div>
                      }
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        );
      });
    } else {
        return <h2 className="no_showtime">Không có suất chiếu</h2>;
    }
  };

  const renderLichChieuContent = () => {
    return theaterSystem?.map((htr, index) => {
      return (
        <TabPane
          tab={
            <img
              src={htr.logo}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          }
          key={htr.maHeThongRap}
        >
          {renderInforLichChieu()}
        </TabPane>
      );
    });
  };

  return (
    <div className="lich_chieu">
      <Tabs tabPosition="left" onChange={changeActiveTab}>
        {renderLichChieuContent()}
      </Tabs>
    </div>
  );
}
