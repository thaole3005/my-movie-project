import axiosClient from "./axiosClient";

const ticketManagerApi = {
  getInfoTicketRoomByMaLichChieu: (params) => {
    console.log("params in getInfoTicketRoomByMaLichChieu", params);
    const url = "/api/QuanLyDatVe/LayDanhSachPhongVe";
    return axiosClient.get(url, { params });
  },

  createCalendarMovie: (params) => {
    const url = "/api/QuanLyDatVe/TaoLichChieu";
    return axiosClient.post(url, {params});
  },

  orderTicket: (params) => {
    console.log("vào manageApi orderTicket", params);
    const url = "/api/QuanLyDatVe/DatVe";
    return axiosClient.post(url, {params});
  },
};

export default ticketManagerApi;
