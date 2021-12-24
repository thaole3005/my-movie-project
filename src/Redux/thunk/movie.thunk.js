import { TOKEN_CYBERSOFT } from "../../API/axiosClient";
import filmManagerApi from "../../API/filmManagerApi";
import * as action from "../actions/movie.action";
import { showMessageAntd } from './../../util/showMessageAntd';
import Axios from 'axios';



export const getListBanner = () => (dispatch) => {
  dispatch(action.getBannerStart());

  filmManagerApi
    .getListBanner()
    .then((banner) => dispatch(action.getBannerSuccess(banner)))
    .catch((err) => dispatch(action.getBannerError(err)));
};

export const getListMovie = (params) => (dispatch) => {
  dispatch(action.getListMovieStart());

  filmManagerApi
    .getListFilm({tenPhim: params})
    .then((movie) => dispatch(action.getListMovieSuccess(movie)))
    .catch((err) => dispatch(action.getListMovieError(err)));
};

export const getMovieDetail = (params) => (dispatch) => {
  console.log("params in thunk", params);
  dispatch(action.getMovieDetailStart());

  filmManagerApi
  .getInforFilm({ maPhim: params })
  .then((response) => dispatch(action.getMovieDetailSuccess(response)))
  .catch((err) => dispatch(action.getMovieDetailError(err)))
}

export const removeMovie = (params) => (dispatch) => {
  console.log("params in thunk", params);
  dispatch(action.deleteMovieStart());

  filmManagerApi
  .deleteFilm({ MaPhim: params })
  .then((response) => {
    dispatch(getListMovie());
    showMessageAntd("success", "Xóa phim thành công");
  })
  .catch((err) => {
    showMessageAntd("error", "Xóa phim thất bại");
  })
}



// export const addMovieAdmin = (params) => (dispatch) => {
//   console.log("params in thunk", params);
//   dispatch(action.createMovieStart());

//   filmManagerApi
//   .createFilm({ frm: params })
//   .then((response) => {
//     dispatch(getListMovie());
//     showMessageAntd("success", "Thêm phim thành công");
//   })
//   .catch((err) => {
//     showMessageAntd("error", "Thêm phim thất bại");
//   })
// }





export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) =>{

      try {
          const {data, status} = await Axios({
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
            method: 'POST',
            data: formData,
            headers: {
              "TokenCybersoft": TOKEN_CYBERSOFT,
              'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
            }

        })
          console.log("data in themPhimUploadHinhAction", data);
          if(status === 200) {
            dispatch(getListMovie());
            showMessageAntd("success", "Thêm phim thành công");
          }
      } catch (error) {
        showMessageAntd("error", "Thêm phim thất bại");
      }
  }
}



export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) =>{

      try {
          const {data, status} = await Axios({
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
            method: 'POST',
            data: formData,
            headers: {
              "TokenCybersoft": TOKEN_CYBERSOFT,
              'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
            }

        })
          console.log("data in themPhimUploadHinhAction", data);
          if(status === 200) {
            dispatch(getListMovie());
            showMessageAntd("success", "Update phim thành công");
          }
      } catch (error) {
        showMessageAntd("error", "Update phim thất bại thất bại");
      }
  }
}

