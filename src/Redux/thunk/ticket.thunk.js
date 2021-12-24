
import * as action from "../actions/ticket.action";
import ticketManagerApi from "../../API/ticketManagerApi";
import { showMessageAntd } from "../../util/showMessageAntd";
import { TOKEN_CYBERSOFT } from "../../API/axiosClient";
import Axios from 'axios';


export const getInfoTicketRoom = (params) => {
    return (dispatch) => {
        dispatch(action.getInfoTicketRoomStart());

        ticketManagerApi
        .getInfoTicketRoomByMaLichChieu({MaLichChieu: params})
        .then((response) => dispatch(action.getInfoTicketRoomSuccess(response)))
        .catch(err => dispatch(action.getInfoTicketRoomError(err)))
    }
}




// export const payTicket = (params) => {
//     console.log("thongTinDatVe", params);
//     return (dispatch) => {
//         dispatch(action.payTicketStart());
        
//         ticketManagerApi
//         .orderTicket({DanhSachVe: params})
//         .then((response) => {
//             console.log("đặt vé thành công");
//             dispatch(action.payTicketSuccess(response));
//             showMessageAntd("success", "Đặt vé thành công");
            
//         })
//         .catch(err => dispatch(action.payTicketError(err)))
//     }
// }



export const payTicket = (thongTinDatVe) => {
    return async dispatch => {
        try {
            const response = await Axios({
                url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinDatVe,
                headers: {
                  "TokenCybersoft": TOKEN_CYBERSOFT,
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                }
    
            })
            console.log("data in datVeAction", response.data);
            if(response.status === 200) {
                dispatch(action.payTicketSuccess(response));
                showMessageAntd("success", "Đặt vé thành công");
            }

        } catch (error) {
            showMessageAntd("error", "Đặt vé thất bại");
            dispatch(action.payTicketError(error));
        }
    }
}





// export const createCalendarMovieByAdmin = (params) => (dispatch) => {
//     console.log("params in thunk", params);
//     dispatch(action.createCalendarMovieStart());
  
//     ticketManagerApi
//     .createCalendarMovie({ lich: params })
//     .then((response) => {
//       showMessageAntd("success", "Tạo lịch chiếu thành công");
//     })
//     .catch((err) => {
//       showMessageAntd("error", "Tạo lịch chiếu thất bại");
//     })
//   }


  export const createCalendarMovieByAdmin = (lichChieu) => {
    return async (dispatch) =>{
  
        try {
            const {data, status} = await Axios({
              url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
              method: 'POST',
              data: lichChieu,
              headers: {
                "TokenCybersoft": TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
              }
  
          })
            console.log("data in createCalendarMovieByAdmin", data);
            if(status === 200) {
                showMessageAntd("success", "Tạo lịch chiếu thành công");

            }
        } catch (error) {
          showMessageAntd("error", "Tạo lịch chiếu thất bại");
        }
    }
  }
  
  




// export const payTicket = (thongTinDatVe, setCurrentPage) => {
//     console.log("thongTinDatVe", thongTinDatVe);
//     return (dispatch) => {
//         dispatch(action.payTicketStart());
//         setCurrentPage("result");

//         ticketManagerApi
//         .orderTicket({DanhSachVe: thongTinDatVe})
//         .then((response) => {
//             console.log("đặt vé thành công");
//             dispatch(action.payTicketSuccess(response));
            
//         })
//         .catch(err => dispatch(action.payTicketError(err)))
//     }
// }





// export const getInfoTicketRoom = (params) => (dispatch) => {
//     dispatch(action.getInfoTicketRoomStart());

//         ticketManagerApi
//         .getInfoTicketRoomByMaLichChieu({MaLichChieu: params})
//         .then((response) => dispatch(action.getInfoTicketRoomSuccess(response)))
//         .catch(err => dispatch(action.getInfoTicketRoomError(err)))
//   };