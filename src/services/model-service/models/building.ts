import { Model3D } from "../../../types";

export const building: Model3D = [
  {
    id: "base",
    type: "cube",
    color: "gray",
    position: {
      x: 0,
      y: 2.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [10, 4, 10],
  },
  {
    id: "roof",
    type: "cube",
    color: "darkgray",
    position: {
      x: 0,
      y: 5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [10, 1, 10],
  },
  {
    id: "window_front_left",
    type: "cube",
    color: "lightblue",
    position: {
      x: -3,
      y: 2,
      z: 5,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [2, 3, 0.1],
  },
  {
    id: "window_front_right",
    type: "cube",
    color: "lightblue",
    position: {
      x: 3,
      y: 2,
      z: 5,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [2, 3, 0.1],
  },
];
