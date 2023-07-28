import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducer/dataSlice";

const store = configureStore({
  reducer: { user: dataSlice.reducer },
});
export default store;
