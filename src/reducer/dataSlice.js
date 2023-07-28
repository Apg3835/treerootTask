import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../App";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    listOpen: false,
    formOpen: false,
    windowWidth: false,
  },
  reducers: {
    userFormOpen(state, action) {
      state.formOpen = true;
      state.listOpen = false;
      state.windowWidth = false;
    },
    userListOpen(state, action) {
      state.formOpen = false;
      state.listOpen = true;
      state.windowWidth = false;
    },
    userWindowOpen(state, action) {
      state.windowWidth = true;
      state.formOpen = false;
      state.listOpen = false;
    },
  },
  // here extra reducer to add the casereducer fetchUserData from app.js
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  },
});

export default dataSlice;
export const dataSliceActions = dataSlice.actions;
