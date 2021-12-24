import * as action from "../actions/modal.action";


export const submitModalThunk = (payload) => async (dispatch, getState) => {
    console.log("STATE", getState());
    // await dispatch(action.handleOkModalAntdWithLodaing(payload));
    // setTimeout(() => {
    //     dispatch(action.hideLoadingAntd())
    //   }, 3000);

  };
  