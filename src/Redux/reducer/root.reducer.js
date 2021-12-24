import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import theaterReducer from "./theater.reducer";
import { modalAntdReducer } from './modalAntd.reducer';
import { authReducer } from "./auth.reducer";
import userReducer from "./user.reducer";
import ticketReducer from './ticket.reducer';
import drawerAntdReducer from './drawerAntd.reducer';

const rootReducer = () =>
  combineReducers({
    movie: movieReducer,
    theater: theaterReducer,
    modalAntd: modalAntdReducer,
    user: userReducer,
    auth: authReducer,
    ticket: ticketReducer,
    drawerAntd: drawerAntdReducer,
  });

export default rootReducer;
