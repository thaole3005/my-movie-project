import { movieType } from "../actionType/actionType";

export const getBannerStart = () => ({
  type: movieType.GET_BANNER_START,
});

export const getBannerSuccess = (payload) => ({
  type: movieType.GET_BANNER_SUCCESS,
  payload: payload,
});

export const getBannerError = () => ({
  type: movieType.GET_BANNER_ERROR,
});

export const getListMovieStart = () => ({
  type: movieType.GET_LIST_MOVIE_START,
});

export const getListMovieSuccess = (payload) => ({
  type: movieType.GET_LIST_MOVIE_SUCCESS,
  payload: payload,
});

export const getListMovieError = () => ({
  type: movieType.GET_LIST_MOVIE_ERROR,
});

export const addMovieStart = () => ({
  type: movieType.ADD_MOVIE_START,
});

export const addMovieSuccess = (payload) => ({
  type: movieType.ADD_MOVIE_SUCCESS,
  payload: payload,
});

export const addMovieError = () => ({
  type: movieType.ADD_MOVIE_ERROR,
});

export const getMovieDetailStart = () => ({
  type: movieType.GET_MOVIE_DETAIL_START,
});

export const getMovieDetailSuccess = (payload) => ({
  type: movieType.GET_MOVIE_DETAIL_SUCCESS,
  payload: payload,
});

export const getMovieDetailError = () => ({
  type: movieType.GET_MOVIE_DETAIL_ERROR,
});



export const deleteMovieStart = () => ({
  type: movieType.DELETE_MOVIE_START,
});

export const deleteMovieSuccess = (payload) => ({
  type: movieType.DELETE_MOVIE_SUCCESS,
  payload: payload,
});

export const deleteMovieError = () => ({
  type: movieType.DELETE_MOVIE_ERROR,
});



export const createMovieStart = () => ({
  type: movieType.ADD_MOVIE_START,
});

export const createMovieSuccess = (payload) => ({
  type: movieType.ADD_MOVIE_SUCCESS,
  payload: payload,
});

export const createMovieError = () => ({
  type: movieType.ADD_MOVIE_ERROR,
});

