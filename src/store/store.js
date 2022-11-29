import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "features/auth";
import { dairySlice } from "features/dairy";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dairy: dairySlice.reducer,
  },
});
