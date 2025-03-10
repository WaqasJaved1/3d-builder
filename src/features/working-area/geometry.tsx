import type { FC } from "react";
import { Object3D } from "../../types";

interface Props {
  object: Object3D;
}

export const Geometry: FC<Props> = ({ object }) => {
  if (object.type === "rectangle") {
    return (
      <boxGeometry args={[object.size[0], object.size[1], object.size[2]]} />
    );
  }

  if (object.type === "circle") {
    return <sphereGeometry args={[object.size[0], 32, 32]} />;
  }

  if (object.type === "cylinder") {
    return (
      <cylinderGeometry
        args={[object.size[0], object.size[1], object.size[2], 32]}
      />
    );
  }
  return null;
};
