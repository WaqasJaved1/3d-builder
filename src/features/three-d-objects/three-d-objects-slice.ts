import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Axis, Object3D } from "../../types";

// Define initial state
interface ThreeDObjectsState {
  objects: Object3D[];
}

const initialState: ThreeDObjectsState = {
  objects: [],
};

const threeDObjectsSlice = createSlice({
  name: "meshes",
  initialState,
  reducers: {
    addObject: (state, action: PayloadAction<Object3D>) => {
      state.objects.push(action.payload);
    },
    setObject: (state, action: PayloadAction<Object3D[]>) => {
      state.objects = action.payload;
    },
    deleteObject: (state, action: PayloadAction<string>) => {
      state.objects = state.objects.filter((_) => _.id !== action.payload);
    },
    changeColor: (
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) => {
      const { id, color } = action.payload;
      const object = state.objects.find((_) => _.id === id);
      if (object) {
        object.color = color;
      }
    },
    changePosition: (
      state,
      action: PayloadAction<{ id: string; axis: Axis; value: number }>
    ) => {
      const { id, axis, value } = action.payload;
      const object = state.objects.find((_) => _.id === id);
      if (object) {
        object.position[axis] = value;
      }
    },
    changeRotation: (
      state,
      action: PayloadAction<{ id: string; axis: Axis; value: number }>
    ) => {
      const { id, axis, value } = action.payload;
      const object = state.objects.find((_) => _.id === id);
      if (object) {
        object.rotation[axis] = value;
      }
    },
    changeSize: (
      state,
      action: PayloadAction<{ id: string; index: number; value: number }>
    ) => {
      const { id, index, value } = action.payload;
      const object = state.objects.find((_) => _.id === id);
      if (object) {
        object.size[index] = value;
      }
    },
  },
});

export const {
  addObject,
  deleteObject,
  changeColor,
  changePosition,
  changeRotation,
  changeSize,
  setObject,
} = threeDObjectsSlice.actions;
export default threeDObjectsSlice.reducer;
