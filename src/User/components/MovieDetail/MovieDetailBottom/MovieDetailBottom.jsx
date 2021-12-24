import React, {useRef, useEffect} from "react";
import LichChieu from "./LichChieu/LichChieu";
import { Tabs } from "antd";
import "./MovieDetailBottom.scss";
import ThongTin from './ThongTin/ThongTin';
import DanhGia from "./DanhGia/DanhGia";

const { TabPane } = Tabs;

export default function MovieDetailBottom(props) {
   
  const movieBottomSection = useRef(null);
  useEffect(() => {
   
    // console.log("height bottom", movieBottomSection.current.offsetTop);
    //lấy chiều cao của MovieBottomSection so với top
    let movieBottomHeight = movieBottomSection.current.offsetTop;
    props.setMovieBottomSection_Height(movieBottomHeight);

}, [])

  return (
    <div className="moviebottom" ref={movieBottomSection}>
      <div className="custom_container moviebottom_container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="LỊCH CHIẾU" key="1">
             <LichChieu />
          </TabPane>
          <TabPane tab="THÔNG TIN" key="2">
            <ThongTin/>
          </TabPane>
          <TabPane tab="ĐÁNH GIÁ" key="3">
            <DanhGia/>
          </TabPane>
        </Tabs>
        
      </div>
    </div>
  );
}
