import { configureStore } from "@reduxjs/toolkit";

import {
  authSlice,
  characterSlice,
} from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    character: characterSlice.reducer,
     },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
