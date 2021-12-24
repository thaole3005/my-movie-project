import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { payTicket } from '../../../../Redux/thunk/ticket.thunk';
import { showConfirm } from './../../../components/ConfirmAntd/ConfirmAntd';
import { ThongTinDatVe } from '../../../../_core/models/ThongTinDatVe';
import "./Payment.scss";

export default function Payment({infoTicketRoom, setCurrentPage}) {

    const { arrGheDangChon} = useSelector(state => state.ticket);

    let infoThanhToan = {};
    if(localStorage.getItem('info_thanh_toan')) {
        infoThanhToan = JSON.parse(localStorage.getItem('info_thanh_toan'));
    }

    const dispatch = useDispatch();
    

    useEffect(() => {
        showConfirm("Xác nhận thanh toán", 
        renderPaymentInfo(), 
        thanhToan,
        "Đặt lại ghế", "Thanh toán",
        () => {
            setCurrentPage("chonGhe");
        }
         
         )
        
    }, [])
    
    const renderGheDangChon = () => {
            return arrGheDangChon.map((gheDangChon, index) => {
                return <span key={index}>{` ${gheDangChon.tenGheForm}, `}</span>
            })
      
    }

    const thanhToan = async () => {
        //call api tiến hành đặt vé
        const thongTinDatVe = new ThongTinDatVe();
        thongTinDatVe.maLichChieu = infoTicketRoom.thongTinPhim.maLichChieu;
        thongTinDatVe.danhSachVe = arrGheDangChon;

        // dispatch(payTicket(thongTinDatVe, setCurrentPage));
        await dispatch(payTicket(thongTinDatVe));
        setCurrentPage("result");
        // dispatch(changePageAction("result"));
    }


    const renderPaymentInfo = () => {
        return (
            <div className="infor_payment">
            <div>
                <p>Ghế đã đặt</p>
                <p>Giá</p>
                <p>Hình thức thanh toán</p>
            </div>

            <div className="infor_payment_right">
                <p>
                    {renderGheDangChon()}
                </p>
                <p>{infoThanhToan.tongTien} VND</p>
                <p>{infoThanhToan.howtopay}</p>
            </div>
        </div>
        )
    }

    return null;
}
