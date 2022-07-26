import { AnyAction } from "redux";
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  fetchedProducts: [],
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {
        fetchedProducts: action.payload,
      };

    default:
      return state;
  }
};
