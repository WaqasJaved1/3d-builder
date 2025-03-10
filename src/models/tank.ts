import { Object3D } from "../types";

export const tank: Object3D[] = [
  {
    id: "tank-body",
    type: "rectangle",
    color: "green",
    position: {
      x: 0,
      y: 0.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [4, 1, 2],
  },
  {
    id: "tank-turret",
    type: "cylinder",
    color: "darkgreen",
    position: {
      x: 0,
      y: 1.2,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: [0.6, 0.8, 0.4],
  },
  {
    id: "tank-barrel",
    type: "cylinder",
    color: "darkgray",
    position: {
      x: 1.5,
      y: 1.2,
      z: 0,
    },
    rotation: {
      x: Math.PI / 2,
      y: 0,
      z: Math.PI / 2,
    },
    size: [0.1, 0.1, 3],
  },
  {
    id: "tank-wheel-1",
    type: "cylinder",
    color: "black",
    position: {
      x: -1.5,
      y: 0,
      z: 1,
    },
    rotation: {
      x: Math.PI / 2,
      y: 0,
      z: 0,
    },
    size: [0.4, 0.4, 0.4],
  },
  {
    id: "tank-wheel-2",
    type: "cylinder",
    color: "black",
    position: {
      x: 1.5,
      y: 0,
      z: 1,
    },
    rotation: {
      x: Math.PI / 2,
      y: 0,
      z: 0,
    },
    size: [0.4, 0.4, 0.4],
  },
  {
    id: "tank-wheel-3",
    type: "cylinder",
    color: "black",
    position: {
      x: -1.5,
      y: 0,
      z: -1,
    },
    rotation: {
      x: Math.PI / 2,
      y: 0,
      z: 0,
    },
    size: [0.4, 0.4, 0.4],
  },
  {
    id: "tank-wheel-4",
    type: "cylinder",
    color: "black",
    position: {
      x: 1.5,
      y: 0,
      z: -1,
    },
    rotation: {
      x: Math.PI / 2,
      y: 0,
      z: 0,
    },
    size: [0.4, 0.4, 0.4],
  },
];
