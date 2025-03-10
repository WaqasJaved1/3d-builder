export const GeometryArgs = {
  circle: [
    {
      id: "radius",
      label: "Radius",
      type: "number",
      min: 0,
      max: 100,
    },
  ],
  rectangle: [
    {
      id: "width",
      label: "Width",
      type: "number",
      min: 0,
      max: 100,
    },
    {
      id: "height",
      label: "Height",
      type: "number",
      min: 0,
      max: 100,
    },
    {
      id: "depth",
      label: "Depth",
      type: "number",
      min: 0,
      max: 100,
    },
  ],
  cylinder: [
    {
      id: "radius-1",
      label: "Radius 1",
      type: "number",
      min: 0,
      max: 100,
    },
    {
      id: "radius-2",
      label: "Radius 2",
      type: "number",
      min: 0,
      max: 100,
    },
    {
      id: "height",
      label: "Height",
      type: "number",
      min: 0,
      max: 100,
    },
  ],
};
