import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchanges: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setExchanges: (state, action) => {
      state.exchanges = action.payload;
    },
  },
});

const { actions, reducer: dataReducer } = dataSlice;

export const setExchanges = actions.setExchanges;

export default dataReducer;
