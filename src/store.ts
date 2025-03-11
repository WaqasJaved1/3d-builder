import { configureStore } from "@reduxjs/toolkit";
import threeDModelSlice from "./state/slices/three-d-model";

export const store = configureStore({
  reducer: {
    threeDModel: threeDModelSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
