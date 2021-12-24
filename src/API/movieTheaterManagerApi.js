import axiosClient from "./axiosClient";

const movieTheaterManagerApi = {
  getInforMovieTheater: (params) => {
    const url = "/api/QuanLyRap/LayThongTinHeThongRap";
    return axiosClient.get(url, { params });
  },

  getClusterTheater: (params) => {
    const url = "/api/QuanLyRap/LayThongTinCumRapTheoHeThong";
    return axiosClient.get(url, { params });
  },

  getTheaterSystemShowtimeInfor: (params) => {
    const url = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return axiosClient.get(url, { params });
  },

  getInforShowtimeMovie: (params) => {
    const url = "/api/QuanLyRap/LayThongTinLichChieuPhim";
    return axiosClient.get(url, { params });
  },


};

export default movieTheaterManagerApi;
