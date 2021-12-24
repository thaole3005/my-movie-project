import { ticketType } from "../actionType/actionType";

const initialState = {
    infoTicketRoom: {}, 
    isLoading: false,
    error: null,
    arrGheDangChon: [
   
        // {
        //     daDat: false,
        //     giaVe: 90000,
        //     loaiGhe: "Vip",
        //     maGhe: 67203,
        //     maRap: 574,
        //     stt: "123",
        //     taiKhoanNguoiDat: null,
        //     tenGhe: "123",
        // },
        // {
        //     daDat: false,
        //     giaVe: 75000,
        //     loaiGhe: "Thuong",
        //     maGhe: 67085,
        //     maRap: 574,
        //     stt: "05",
        //     taiKhoanNguoiDat: null,
        //     tenGhe: "05",
        // }
    ],

}

const ticketReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ticketType.GET_TICKET_ROOM_INFO_START: {
        return {
            ...state,
            isLoading: true,
            error: null,
          };
    }
    
    case ticketType.GET_TICKET_ROOM_INFO_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          infoTicketRoom: payload.data.content,
        };
      }
  
      case ticketType.GET_TICKET_ROOM_INFO_ERROR: {
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      }

      case ticketType.CHON_GHE: {
        const arrGheDangChonUpdate = [...state.arrGheDangChon];

         //kiểm tra ghế ng dùng chọn đã có trong mảng arrGheDangChon chưa
         let indexGheSelect = arrGheDangChonUpdate.findIndex(ghe => ghe.maGhe === payload.gheSelect.maGhe);
         if(indexGheSelect >=0) {
             //xóa ghê đang chọn
             arrGheDangChonUpdate.splice(indexGheSelect, 1);
         } else {
             //thêm
             let {gheSelect, letter} = payload;
             gheSelect["tenGheForm"] = `${letter}${gheSelect.tenGhe}`;
             arrGheDangChonUpdate.push(gheSelect);
         }
        return {
          ...state,
          arrGheDangChon: arrGheDangChonUpdate,

        }
      }


      case ticketType.PAY_TICKET_START: {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      }


      case ticketType.PAY_TICKET_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        }
      }

      case ticketType.PAY_TICKET_ERROR: {
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      }

      case ticketType.RESET_GHE_DANG_CHON: {
        console.log("vào case RESET_GHE_DANG_CHON");
        return {
          ...state,
          isLoading: false,
          arrGheDangChon: [],
        }
      }

    default:
        return state
    }
}



export default ticketReducer;