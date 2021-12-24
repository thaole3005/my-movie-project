import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { showConfirm } from "./../../components/ConfirmAntd/ConfirmAntd";
import { Row, Col } from "antd";
import BookingProgress from './../../components/BookingMovie/BookingProgress/BookingProgress';
import "./BookingMovie.scss";
import BookingForm from './../../components/BookingMovie/BookingForm/BookingForm';
import TicketRoom from './../../components/BookingMovie/TicketRoom/TicketRoom';
import Payment from './../../components/BookingMovie/Payment/Payment';
import BookingResult from './../../components/BookingMovie/BookingResult/BookingResult';
import { getInfoTicketRoom } from './../../../Redux/thunk/ticket.thunk';
import Button from "../../components/Button/Button";

export default function BookingMovie(props) {
  const { profile, isLoggedIn } = useSelector((state) => state.auth);
  const { infoTicketRoom, arrGheDangChon } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  console.log("infoTicketRoom", infoTicketRoom);

  const [currentPage, setCurrentPage] = useState("chonGhe");

  const history = useHistory();



    
  useEffect(() => {
    const {maLichChieu} = props.match.params;
    if (isLoggedIn) {
        //nếu user đã đăng nhập rồi thì mới lấy thông tin phòng vé
        dispatch(getInfoTicketRoom(maLichChieu));
    }
}, [])





  if (!isLoggedIn) {
    showConfirm(
      "Bạn chưa đăng nhập?",
      <p>Bạn cần đăng nhập để đặt vé</p>,
      () => {
        history.push("/login");
      },

      "Trang chủ",
      "Đăng nhập",
      () => {
        history.push("/");
      }
    );
    return null;
  }



  return (
    <div className="bookingmovie">


      <Row>
 
        <Col span={24}>
            <BookingProgress
                    currentPage={currentPage}
            />
        </Col>
   
        <Col span={24} md={currentPage === "result" ? 24 : 16}>
     

            {
                currentPage === "chonGhe" && (
                    <>
                        <TicketRoom infoTicketRoom={infoTicketRoom} setCurrentPage={setCurrentPage}/>
                       
                    </>
                )
            }

            {
                currentPage === "payment" && (
                    <Payment infoTicketRoom={infoTicketRoom} setCurrentPage={setCurrentPage}/>
                )
            }

            {
                currentPage === "result" && (
                    <BookingResult infoTicketRoom={infoTicketRoom} setCurrentPage={setCurrentPage}/>
                )
            }
        </Col>
        <Col span={0} md={currentPage !== "chonGhe" ? 0 : 8} className="booking_form_section">
            {
                currentPage === "chonGhe" && (
                  <BookingForm infoTicketRoom={infoTicketRoom} setCurrentPage={setCurrentPage}/>
                )
            }
           
        </Col>
        
      </Row>
    </div>
  );
}
