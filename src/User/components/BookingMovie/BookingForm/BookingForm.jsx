import React, { useMemo, useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import "./BookingForm.scss";
import { showConfirm } from './../../ConfirmAntd/ConfirmAntd';
import Radio from '../../Radio/Radio';
import Button from './../../Button/Button';
import { Input, Alert } from 'antd';
import { closeDrawerAntd } from '../../../../Redux/actions/drawer.action';

const voucherList = ["tix1", "tix2", "tix3"];

export default function BookingForm({infoTicketRoom, setCurrentPage}) {
    const { arrGheDangChon} = useSelector(state => state.ticket);
    const {thongTinPhim} = infoTicketRoom;
    // console.log("tiepTucMuaVe", tiepTucMuaVe)


    const dispatch = useDispatch();


    const [voucherValue, setVoucherValue] = useState("");
    const [isVoucher, setIsVoucher] = useState(true);
    const [voucherAlert, setVoucherAlert] = useState(false);
    const [howtopay, setHowtopay] = useState("");
    // console.log("howtopay", howtopay);

    // if(tiepTucMuaVe) {
    //     setVoucherValue("");
    //     // setHowtopay("");
    //     // window.location.reload();
    // }

    const [tongTien, setTongTien] = useState(0);

    const renderGheDangChon = () => {
        if (arrGheDangChon.length > 0) {
            return arrGheDangChon.map((gheDangChon, index) => {
                return <span key={index}>{` ${gheDangChon.tenGheForm}, `}</span>
            })
        } else {
            return <p>Vui lòng chọn ghế</p>
        }
    }


    useEffect(() => {
        tinhTongTien();
    }, [arrGheDangChon, voucherValue])

    const handleChangeVoucher = (e) => {
        console.log("vouchervalue", e.target.value);
        let voucherValue = e.target.value;
        setVoucherValue(voucherValue);
        
        if(voucherList.some(item => item === voucherValue)) {
            setIsVoucher(true);
            setVoucherAlert(false);

        } else {
            setVoucherAlert(true);
        }
    }

    const applyVoucher = () => {
        let newTongTien=0;
        // console.log("voucherValue", voucherValue);
            switch(voucherValue) {
            case "tix1": {
                newTongTien = tongTien - tongTien*0.1 ;
                break;
            }
            case "tix2": {
                newTongTien = tongTien - tongTien*0.2 ;
                break;
            }
            case "tix3": {
                newTongTien = tongTien - tongTien*0.3 ;
                break;
            }

            default: {
                return tongTien;
            }
        }
        // console.log("newTongTien", newTongTien);
        setIsVoucher(false);   //apply voucher này xong thhif k apply voucher khác nữa(chỉ đc apply 1 voucher)
        setTongTien(newTongTien.toLocaleString());
    }

    const handleChangeHowtopay = (e) => {
        // console.log("howtopay", e.target.value);
        setHowtopay(e.target.value);
    }


    const tinhTongTien = () => {
        
       const tongGiaVe = arrGheDangChon.reduce((tongTien, gheDangChon, index) => {
            return tongTien += gheDangChon.giaVe;
        },0);
        setTongTien(tongGiaVe);

    }


    const datVe = () => {
        setCurrentPage("payment");
        dispatch(closeDrawerAntd());

    }

    return (
        <div className="booking_form_container bg-white">
            <div className="booking_form_content">
                <div className="booking_form_info">
                    <div className ="booking_total">
                        <h3>
                            Tổng tiền: {tongTien} đ
                        </h3>

                    </div>
                    <hr/>
                    <div className="movie_info">
                        <p className="movie_name">{thongTinPhim?.tenPhim}</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                        <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenCumRap}</p>
                    </div>
                    <hr/>
                   
                    <div className="ghe_da_chon_group">
                        <div className="">
                            <span>Ghế:</span>
                            {
                                renderGheDangChon()
                            }
                        </div>
                        <p className="tong_gia_ghe">
                            {
                                  
                                arrGheDangChon.reduce((tongTien, gheDangChon, index) => {
                                    return tongTien += gheDangChon.giaVe;
                                },0).toLocaleString()
                                
                            }
                        </p>
                    </div>
                    
                    <div className="chon_combo">
                        <p>Chọn Combo</p>
                        <p className="tong_gia_combo">
                          0đ
                        </p>
                    </div>

                    <div className="uu_dai mt-2">
                        <Input placeholder="Nhập mã giảm giá" 
                        className="form-control"
                        disabled = {arrGheDangChon.length===0 || !isVoucher}
                        onChange = {handleChangeVoucher}
                        value = {voucherValue}
                        />
                        <Button customclass="ap_dung_btn"
                        disabled = {arrGheDangChon.length===0 || voucherAlert || !isVoucher}
                        classdisable = {arrGheDangChon.length===0 || voucherAlert || voucherValue ==="" ? "disabled_button" : ""}
                        onClick={() => {
                            applyVoucher();
                        }}
                        >Áp dụng</Button>
                        <div>
                            {
                                voucherAlert ? 
                                <Alert message="Voucher này không tồn tại" type="error" /> : ""
                            }
                        </div>
                    </div>
                    <p className="text_center">Mã giảm giá: tix1, tix2, tix3</p>
                    <hr/>

                    <div className="hinh_thuc_thanh_toan">
                        <Radio name="howtopay" value="ATM" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <Radio name="howtopay" value="VISA" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <Radio name="howtopay" value="CASH" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <div>
                            {
                                howtopay === "" ? 
                                <Alert message="Bạn cần chọn phương thức thanh toán" type="error" /> : ""
                            }
                        </div>
                    </div>

                    <hr/>

                    <div className="notice">
                        <p>
                            Vé đã mua không thể đổi hoặc hoàn tiền
                        </p>
                        <br/>
                        <p>Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</p>

                    </div>

                </div>
                
                <div className="dat_ve">
                    <Button
                    disabled = {arrGheDangChon.length===0 || howtopay ===""}
                    classdisable = {arrGheDangChon.length===0 || howtopay ==="" ? "disabled_button" : ""}
                    onClick={() => {
                        showConfirm("Bạn vui lòng xác nhận thông tin", thongTinDatVe(thongTinPhim, renderGheDangChon, tongTien), datVe, "Hủy", "Xác nhận");
                        localStorage.setItem("info_thanh_toan", JSON.stringify({
                            howtopay: howtopay,
                            tongTien: tongTien,
                        }))
                    }}
                    >Đặt vé</Button>
                </div>
            </div>

        </div>
    )
}




const thongTinDatVe = (thongTinPhim, renderGheDangChon, tongTien) => {
  

    return <div className="infor_booking_container">
        <div className="infor_booking_content">
            <div>
                <p>Tên phim</p>
                <p>Cụm Rạp</p>
                <p>Thời gian chiếu</p>
                <p>Ghế</p>
                <p>Gía vé </p>
            </div>
            <div className="info_right">
                        <p className="movie_name">{thongTinPhim?.tenPhim}</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                        <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                        <p>
                            {
                                renderGheDangChon()
                            }
                        </p>
                        <p>{tongTien.toLocaleString()}</p>
            </div>
        </div>
    </div>
}