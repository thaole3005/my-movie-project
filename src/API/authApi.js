import axiosClient from "./axiosClient";

const login = {
  userLogin: (params) => {
    const url = "/api/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(url, params);
  },
  profileToken: (params) => {
    const url = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return axiosClient.post(url, params);
  },
};

export default login;
