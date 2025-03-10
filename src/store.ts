import { configureStore } from "@reduxjs/toolkit";
import threeDObjectsSlice from "./features/three-d-objects/three-d-objects-slice";

export const store = configureStore({
  reducer: {
    threeDObjects: threeDObjectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
