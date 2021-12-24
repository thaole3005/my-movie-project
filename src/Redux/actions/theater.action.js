import { theaterType } from "../actionType/actionType";

export const getInforShowtimeMovieStart = () => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_START,
});

export const getInforShowtimeMovieSuccess = (payload) => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_SUCCESS,
  payload: payload,
});

export const getInforShowtimeMovieError = () => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_ERROR,
});

export const getInforMovieTheaterStart = () => ({
  type: theaterType.GET_INFOR_MOVIE_THEATER_START,
});

export const getInforMovieTheaterSuccess = (payload) => ({
  type: theaterType.GET_INFOR_MOVIE_THEATER_SUCCESS,
  payload: payload,
});


export const getInforMovieTheaterError = () => ({
  type: theaterType.GET_INFOR_SHOWTIME_MOVIE_ERROR,
});


export const getTheaterInfoStart = () => ({
  type: theaterType.GET_INFOR_MOVIE_THEATER_START,
});

export const getTheaterInfoSuccess = (payload) => ({
  type: theaterType.GET_INFOR_MOVIE_THEATER_SUCCESS,
  payload: payload,
});


export const getTheaterInfoError = (err) => ({
  type: theaterType.GET_INFOR_MOVIE_THEATER_ERROR,
  payload: err,
});


//----------------------------------------------------------------




export const getTheaterSystemShowtimeInforStart = () => ({
  type: theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_START,
});


export const getTheaterSystemShowtimeInforSuccess = (payload) => ({
  type: theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_SUCCESS,
  payload: payload,
});

export const getTheaterSystemShowtimeInforError = (err) => ({
  type: theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_ERROR,
  payload: err,
});

