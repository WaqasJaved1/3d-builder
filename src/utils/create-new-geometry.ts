import { Object3D, Object3DTypes } from "../types";
import { v4 as uuidv4 } from "uuid";

const sizes = {
  cube: [1, 1, 1],
  sphere: [1],
  cylinder: [1, 1, 1],
};

export const createNewGeometry = (type: Object3DTypes): Object3D => {
  return {
    id: uuidv4(),
    type,
    color: "#00ff00",
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: sizes[type],
  };
};
