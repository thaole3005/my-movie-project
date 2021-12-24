import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./BookingResult.scss";
import Button from './../../Button/Button';
import { resetGheDangChon } from './../../../../Redux/actions/ticket.action';


export default function BookingResult({infoTicketRoom, setCurrentPage}) {
  const { thongTinPhim, danhSachGhe } = infoTicketRoom;
//   console.log("thongTinPhim", thongTinPhim);

  const { arrGheDangChon } = useSelector((state) => state.ticket);
  const {profile} = useSelector((state) => state.auth);

  let infoThanhToan = {};
  if(localStorage.getItem('info_thanh_toan')) {
      infoThanhToan = JSON.parse(localStorage.getItem('info_thanh_toan'));
  }

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetGheDangChon());
    }
  }, [])


  const renderGheDangChon = () => {
    return arrGheDangChon.map((gheDangChon, index) => {
      return <span key={index}>{` ${gheDangChon.tenGheForm}, `}</span>;
    });
  };
  return (
    <div className="booking_result_section">
      <div className="booking_result_card">
          <div className="booking_result_card_content">
          <h3 className="text_center">Đặt vé thành công</h3>
        <hr />
        <div className="booking_movie_info">
          <div className="booking_movie_img">
            <img src={thongTinPhim.hinhAnh} />
          </div>
          <div className="booking_movie_detail">
            <h4>{thongTinPhim.tenPhim}</h4>
            <h5>{thongTinPhim.tenCumRap}</h5>
            <h5>{thongTinPhim.diaChi}</h5>

            <div>
              <div className="booking_detail_item">
                <p>Suất chiếu: </p>
                <p>
                  {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
                </p>
              </div>
              <div className="booking_detail_item">
                <p>Phòng: </p>
                <p>{thongTinPhim.tenRap}</p>
              </div>
              <div className="booking_detail_item">
                <p>Ghế: </p>
                <p>{renderGheDangChon()}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="booking_user_info">
          <h4 className="text_center">Thông tin đặt vé</h4>
          <div className="info_item">
            <p>Tài khoản</p>
            <p>{profile.taiKhoan}</p>
          </div>
       
          <div className="info_item">
            <p>Email</p>
            <p>{profile.email}</p>
          </div>
          <div className="info_item">
            <p>Số điện thoại</p>
            <p>{profile.soDT}</p>
          </div>
          <div className="info_item">
            <p>Hình thức thanh toán</p>
            <p>{infoThanhToan.howtopay}</p>
          </div>
          <div className="info_item">
            <p>Tổng tiền</p>
            <p>{infoThanhToan.tongTien} VNĐ</p>
          </div>
        </div>

        <div className="booking_action">
            <Button customclass="booking_button">
                <NavLink to="/">Trang chủ</NavLink>
            </Button>
            {/* <button className="booking_button ml-2">
                <NavLink to={`/ticketroom/${thongTinPhim.maLichChieu}`}>Tiếp tục mua vé</NavLink>
            </button> */}
            <Button customclass="booking_button" 
            onClick = {() => {
                // dispatch(tiepTucMuaVeAction());
                localStorage.removeItem("info_thanh_toan");
                window.location.reload();
            }}
            >
              Tiếp tục mua vé
            </Button>
        </div>
          </div>
        
      </div>

     
    </div>
  );
}
