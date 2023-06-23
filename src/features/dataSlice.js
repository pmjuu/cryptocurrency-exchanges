import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchanges: [],
  isAscending: false,
  isDescending: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setExchanges: (state, action) => {
      state.exchanges = action.payload;
    },
    sortAscending: (state) => {
      state.exchanges = state.exchanges.sort(
        (ex1, ex2) => ex1.trade_volume_24h_btc - ex2.trade_volume_24h_btc
      );
      state.isAscending = true;
      state.isDescending = false;
    },
    sortDescending: (state) => {
      state.exchanges.sort(
        (ex1, ex2) => ex2.trade_volume_24h_btc - ex1.trade_volume_24h_btc
      );
      state.isAscending = false;
      state.isDescending = true;
    },
  },
});

export const { setExchanges, sortAscending, sortDescending } =
  dataSlice.actions;
export default dataSlice.reducer;
