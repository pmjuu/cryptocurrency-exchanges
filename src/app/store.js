import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import dataReducer from "../features/dataSlice";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    data: dataReducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
  });

const store = makeStore();

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
