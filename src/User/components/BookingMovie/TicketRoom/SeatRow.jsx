import React, {memo} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { chonGheAction } from '../../../../Redux/actions/ticket.action';
import "./TicketRoom.scss";


const arrayLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];

function SeatRow(props) {
    const {arayItem, indexRow, arrGheDangChon} = props;
    const letter = arrayLetter[indexRow];

    const {profile} = useSelector((state) => state.auth);


    const dispatch = useDispatch();


    const checkGheDangChon = (ghe) => {
        let indexGheDangChon = -1;
        indexGheDangChon = arrGheDangChon.findIndex(gheDangChon => gheDangChon.maGhe === ghe.maGhe);
        if (indexGheDangChon >=0) {
            return true;   //nghĩa là ghế này có tồn tại trong mảng ghế đang chọn
        }

        return false;
    }

    return (
        <>
            <span>{letter}</span>

            {
                arayItem.map((ghe, index) => {

                    let classGheDangChon ='';
                    //!kiểm tra từng ghế xem ghế đó có nằm trong mảng ghế đang chọn không
                    if (checkGheDangChon(ghe)) {
                        classGheDangChon = 'gheDangChon';
                    }
                    
                    let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
                    let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

                    let classGheToiDaDat = "";
                    if(ghe.taiKhoanNguoiDat === profile?.taiKhoan) {
                        classGheToiDaDat = "gheToiDaDat";
                    }

                    let disabledGhe = ghe.daDat;

                    return (
                        <button key={index}
                            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangChon} ${classGheToiDaDat}`} 
                            onClick ={() => {
                                dispatch(chonGheAction(ghe, letter));
                            }}
                            disabled ={disabledGhe}
                        >
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="couch"
                            role="img"
                            viewBox="0 0 640 512"
                            >
                            <path
                                fill="currentColor"
                                d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                            ></path>
                            </svg>
                            {
                               checkGheDangChon(ghe) ? <span className="ten_ghe">{`${letter}${ghe.tenGhe}`}</span> : ''
                            }
                    </button>
                    )
                })
            }
        </>
    )
}


// const Seat = () => {
//     return (
//         <button className="ghe">
//         <svg
//         aria-hidden="true"
//         focusable="false"
//         data-prefix="fas"
//         data-icon="couch"
//         role="img"
//         viewBox="0 0 640 512"
//         >
//         <path
//             fill="currentColor"
//             d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
//         ></path>
//         </svg>
//     </button>
//     )
// }


export default memo(SeatRow);