import { theaterType } from "../actionType/actionType";

const initialState = {
  theaterSystem: [],
  clusterTheater: [],
  showtimesMovie: {},
  calMovieTheater: [],
  isLoading: false,
  error: null,
  pagination: {
    current: 1,
    limit: 20,
    total: 0,
  },

  theaterSystemShowtimeInfor: [],
};

const theaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case theaterType.GET_INFOR_SHOWTIME_MOVIE_START: {
      return {
        ...state,
        isLoading: true,
        showtimesMovie: {},
        error: null,
      };
    }

    case theaterType.GET_INFOR_SHOWTIME_MOVIE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        showtimesMovie: payload.data.content,
      };
    }

    case theaterType.GET_INFOR_SHOWTIME_MOVIE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }


    case theaterType.GET_INFOR_MOVIE_THEATER_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }

    case theaterType.GET_INFOR_MOVIE_THEATER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        theaterSystem: payload.data.content,
      };
    }

    case theaterType.GET_INFOR_MOVIE_THEATER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }


    // ----------------------------------------------------------------
    
    case theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }

    case theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        calMovieTheater: payload.data.content,
      };
    }

    case theaterType.GET_THEATER_SYSTEM_SHOWTIME_INFOR_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }



    default:
      return state;
  }
};

export default theaterReducer;
