import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Axis, Model3D, Object3D } from "../../types";

// Define initial state
interface ThreeDModelState {
  model: Model3D;
}

const initialState: ThreeDModelState = {
  model: [],
};

const threeDModelSlice = createSlice({
  name: "meshes",
  initialState,
  reducers: {
    loadModel: (state, action: PayloadAction<Model3D>) => {
      state.model = action.payload;
    },
    addObject: (state, action: PayloadAction<Object3D>) => {
      state.model.push(action.payload);
    },
    deleteObject: (state, action: PayloadAction<string>) => {
      state.model = state.model.filter((_) => _.id !== action.payload);
    },
    changeColor: (
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) => {
      const { id, color } = action.payload;
      const object = state.model.find((_) => _.id === id);
      if (object) {
        object.color = color;
      }
    },
    changePosition: (
      state,
      action: PayloadAction<{ id: string; axis: Axis; value: number }>
    ) => {
      const { id, axis, value } = action.payload;
      const object = state.model.find((_) => _.id === id);
      if (object) {
        object.position[axis] = value;
      }
    },
    changeRotation: (
      state,
      action: PayloadAction<{ id: string; axis: Axis; value: number }>
    ) => {
      const { id, axis, value } = action.payload;
      const object = state.model.find((_) => _.id === id);
      if (object) {
        object.rotation[axis] = value;
      }
    },
    changeSize: (
      state,
      action: PayloadAction<{ id: string; index: number; value: number }>
    ) => {
      const { id, index, value } = action.payload;
      const object = state.model.find((_) => _.id === id);
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
  loadModel,
} = threeDModelSlice.actions;
export default threeDModelSlice.reducer;
