import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalMovieTheater } from "../../../Redux/thunk/theater.thunk";
import CardTheater from "../CardTheater/CardTheater";
import DetailCalMovie from "../DetailCalMovie/DetailCalMovie";
import "./MultiTab.scss";

const { TabPane } = Tabs;

const MultiTab = () => {
  const { theaterSystem, calMovieTheater } = useSelector(
    (state) => state.theater
  );
  const dispatch = useDispatch();
  const [listTheater, setListTheater] = useState("BHDStar");

  useEffect(() => {
    dispatch(getCalMovieTheater(listTheater));
  }, [listTheater, dispatch]);

  const handleClickTab = (value) => {
    setListTheater(value);
  };

  const handleClickTab2 = (value) => {};

  const lstCumRap = calMovieTheater.map((item, index) => item.lstCumRap);

  return (
    <section className="tabContainer">
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: 520 }}
        className="multitab"
        onTabClick={handleClickTab}
      >
        {theaterSystem &&
          theaterSystem.map((theater, index) => {
            return (
              <TabPane
                tab={
                  <img
                    src={theater.logo}
                    alt="logo-theater"
                    className="multitab-logo"
                  />
                }
                key={theater.maHeThongRap}
              >
                <Tabs
                  tabPosition="left"
                  style={{ height: 520 }}
                  key={`tabs-${theater.maHeThongRap}`}
                  defaultActiveKey="1"
                  onTabClick={handleClickTab2}
                >
                  {lstCumRap &&
                    lstCumRap.map((clusterTheater, ctIndex) => {
                      return clusterTheater.map((item, childIndex) => {
                        const listMovie = item.danhSachPhim;

                        return (
                          <TabPane
                            tab={item && <CardTheater theater={item} />}
                            key={`maCumRap-${item.maCumRap}`}
                          >
                            <Tabs
                              tabPosition="left"
                              style={{ height: 520 }}
                              key={`theater-${item.maCumRap}`}
                            >
                              {listMovie &&
                                listMovie.map((movie, movieIndex) => {
                                  return (
                                    <TabPane
                                      key={`movie-${item.maCumRap}-${movieIndex}`}
                                      tab={
                                        movie && (
                                          <DetailCalMovie movie={movie} />
                                        )
                                      }
                                    ></TabPane>
                                  );
                                })}
                            </Tabs>
                          </TabPane>
                        );
                      });
                    })}
                </Tabs>
              </TabPane>
            );
          })}
      </Tabs>
    </section>
  );
};

export default MultiTab;
