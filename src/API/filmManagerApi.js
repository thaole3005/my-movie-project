import axiosClient from "./axiosClient";

const filmManagerApi = {
  getListBanner: () => {
    const url = "/api/QuanLyPhim/LayDanhSachBanner";
    return axiosClient.get(url);
  },

  getInforFilm: (params) => {
    // console.log("maPhim in getInforFilm,",maPhim);
    const url = "/api/QuanLyPhim/LayThongTinPhim";
    return axiosClient.get(url, {params});
  },

  getListFilm: (params) => {
    const url = "/api/QuanLyPhim/LayDanhSachPhim";
    return axiosClient.get(url, {params});
  },

  getFilFollowDay: (params) => {
    const url = "/api/QuanLyPhim/LayDanhSachPhimTheoNgay";
    return axiosClient.get(url, params);
  },

  createFilm: (params) => {
    const url = "/api/QuanLyPhim/ThemPhimUploadHinh";
    return axiosClient.post(url, params);
  },

  filmManager: (params) => {
    const url = "/api/QuanLyPhim";
    return axiosClient.post(url, params);
  },

  deleteFilm: (params) => {
    const url = "/api/QuanLyPhim/XoaPhim";
    return axiosClient.delete(url, {params});
  },
};

export default filmManagerApi;
