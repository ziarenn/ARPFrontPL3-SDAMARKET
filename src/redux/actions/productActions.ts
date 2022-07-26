import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { initialState } from "../../helpers/interfaces";

export const fetchProducts = (
  quantity: number
): ThunkAction<void, initialState, number, AnyAction> => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${quantity}`
    );
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};
