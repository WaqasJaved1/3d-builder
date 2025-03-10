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

export type Object3D = {
  id: string;
  type: "rectangle" | "circle" | "cylinder";
  color: string;
  position: Position;
  rotation: Rotation;
  size: size;
};
