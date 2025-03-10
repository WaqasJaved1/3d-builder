export type Axis = "x" | "y" | "z";

export type Position = {
  x: number;
  y: number;
  z: number;
};

export type Rotation = {
  x: number;
  y: number;
  z: number;
};

export type size = number[];

export type Object3DTypes = "rectangle" | "circle" | "cylinder";

export type Object3D = {
  id: string;
  type: Object3DTypes;
  color: string;
  position: Position;
  rotation: Rotation;
  size: size;
};
