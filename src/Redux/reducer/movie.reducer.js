import { movieType } from "../actionType/actionType";

const initialState = {
  listBanners: [],
  listMovies: [],
  filterMovie: [],
  movie: {},
  isLoading: false,
  error: null,
  pagination: {
    current: 1,
    limit: 20,
    total: 0,
  },

  movieInfor: {},
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case movieType.GET_BANNER_START: {
      return {
        ...state,
        isLoading: true,
        listBanners: [],
        error: null,
      };
    }

    case movieType.GET_BANNER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        listBanners: payload.data.content,
      };
    }

    case movieType.GET_BANNER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case movieType.GET_LIST_MOVIE_START: {
      return {
        ...state,
        isLoading: true,
        listMovies: [],
        error: null,
      };
    }

    case movieType.GET_LIST_MOVIE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        listMovies: payload.data.content,
      };
    }

    case movieType.GET_LIST_MOVIE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case movieType.GET_MOVIE_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
        movieInfor: {},
     
      };
    }


    case movieType.GET_MOVIE_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movieInfor: payload.data.content,
      }
    }

    case movieType.GET_MOVIE_DETAIL_ERROR: {
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

export default movieReducer;
