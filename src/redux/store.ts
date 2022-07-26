import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk);
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

