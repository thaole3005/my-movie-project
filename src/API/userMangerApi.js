import axiosClient from "./axiosClient";

const userManagerApi = {
  getAllUser: (params) => {
    const url = "/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung";
    return axiosClient.get(url, params);
  },

  getSearchListUser: (params) => {
    const url = "/api/QuanLyNguoiDung/TimKiemNguoiDung";
    return axiosClient.get(url, params);
  },

  createUser: (params) => {
    const url = "/api/QuanLyNguoiDung/DangKy";
    return axiosClient.post(url, params);
  },

  updateUser: (params) => {
    const url = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return axiosClient.put(url, params);
  },

  deleteUser: (params) => {
    const url = "/api/QuanLyNguoiDung/XoaNguoiDung";
    return axiosClient.delete(url, params);
  },
};

export default userManagerApi;
