import React, {useState, useEffect, memo} from 'react';
import "./TicketRoom.scss";
import _ from 'lodash';
import SeatRow from './SeatRow';
import SeatNote from './SeatNote';
import screen from '../../../../assets/img/screen.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Button/Button';
import { Row, Col } from "antd";
import { closeDrawerAntd, openDawerAntd } from './../../../../Redux/actions/drawer.action';
import BookingForm from './../BookingForm/BookingForm';



function TicketRoom({infoTicketRoom, setCurrentPage}) {
    console.log("infoTicketRoom in ticketRoom",infoTicketRoom);
    let {thongTinPhim, danhSachGhe} = infoTicketRoom;
    console.log("thongTinPhim",thongTinPhim);
    console.log("danhSachGhe",danhSachGhe);

    let danhSachGheChunk = _.chunk(danhSachGhe, 16);
    console.log("danhSachGheChunk", danhSachGheChunk)
    const { arrGheDangChon} = useSelector(state => state.ticket);

    const {visible} = useSelector((state) => state.drawerAntd);


      //lấy kích thước màn hình browser trên thiết bị
      const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    console.log("dimension object", dimension);

    useEffect(() => {

      
        //Khi browser load lên thì đăng ký event onload và event onresize
        window.onload = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        //
        window.onresize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        //khi chuyển qua template khác thì hủy sự kiện đi
        // return () => {
        //     //unmount
        //     window.removeEventListener("onload");
        //     window.removeEventListener("onresize");
        // }


    }, [])

    
    useEffect(() => {
        if(dimension.width > 768 && visible === true) {
            dispatch(closeDrawerAntd());
        }
    }, [visible, dimension.width])
    
    const dispatch = useDispatch();


    return (
        <div className="ticket_room_container">
            <div className="ticket_room_content">
                <div className="ticket_room_header">
                    <div className="ticket_room_header_info">
                        <div className="logo_rap">
                            <img src={thongTinPhim?.hinhAnh} style={{width:80, height:100}} alt={thongTinPhim?.tenPhim}/>
                        </div>
                        <div className="movie_info">
                            <p>{thongTinPhim?.tenPhim}</p>
                            <p>{thongTinPhim?.tenCumRap}</p>
                            <p>100 phút - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}</p>
                            <p>Ngày chiếu - {thongTinPhim?.ngayChieu}</p>
                        </div>
                        <div className="time_booking">
                            <p>Thời gian giữ ghế</p>
                        </div>
                    </div>

                    <div className="man_hinh mt-4 text-center">
                        <img src ={screen}/>
                    </div>
                </div>

                <div className="ticket_room_seats_container">
                    <div className="ticket_room_seats">
                        {
                            danhSachGheChunk.map((arayItem, indexRow) => {
                                return (
                                    <div className="seat_row" key={indexRow}>
                                        <SeatRow arayItem={arayItem} indexRow ={indexRow} arrGheDangChon={arrGheDangChon} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <Row>
                        <Col span={24} md={0} className="datve_btn_small_screen">
                            <Button
                                disabled = {arrGheDangChon.length===0}
                                classdisable = {arrGheDangChon.length===0 ? "disabled_button" : ""}
                                onClick = {() => {
                                    dispatch(openDawerAntd({
                                        title: <p>Hoàn tất đặt vé</p>,
                                        drawerContent: <BookingForm infoTicketRoom={infoTicketRoom} setCurrentPage={setCurrentPage}/>,
                                        footerExist: false,
                                    }
                                  ));
                                }}
                            >Đặt vé</Button>
                        </Col>
                    </Row>

                    <div className="seat_note">
                        <SeatNote/>
                    </div>
                
                </div>
            </div>
           
    </div>
    )
}

export default memo(TicketRoom);