import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  volume: 0,
  nextPageToken:null
};

export const stockSlice = createSlice({
  name: "stockApp",
  initialState,
  reducers: {

  },
});

export default stockSlice.reducer;