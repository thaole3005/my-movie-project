import React from 'react';
import { Rate } from "antd";
import avatar from "../../../../../assets/img/avatar.png";



export default function DanhGiaClick() {
    return (
        <div className="danh_gia_click"
        // onClick={() => {
        //   props.openReviewPopup(<DanhGiaPoupContent />);
        // }}
      >
        <div>
          <img className="white_user" src={avatar} />
        </div>
        <div>
          <p>Bạn nghĩ gì về phim này</p>
        </div>
        <div className="start_group">
          <Rate disabled defaultValue={5} />
        </div>
      </div>
    )
}
