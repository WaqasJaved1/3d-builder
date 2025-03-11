import type { FC } from "react";
import { createNewGeometry } from "../../utils";
import { Object3DTypes } from "../../types";
import { addObject } from "../../state";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { ImportThreeDModel } from "./import-three-d-model";
import * as S from "./elements";

interface Props {
  setSelectedObjectId: (id: string) => void;
}
export const ToolsPanel: FC<Props> = ({ setSelectedObjectId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const addGeometry = (type: Object3DTypes) => {
    const geometry = createNewGeometry(type);
    dispatch(addObject(geometry));
    setSelectedObjectId(geometry.id);
  };

  const addSquare = () => {
    addGeometry("cube");
  };

  const addSphere = () => {
    addGeometry("sphere");
  };

  const addCylinder = () => {
    addGeometry("cylinder");
  };

  return (
    <S.Container>
      <button onClick={addSquare}>Add Cube</button>
      <button onClick={addSphere}>Add Sphere</button>
      <button onClick={addCylinder}>Add Cylinder</button>
      <ImportThreeDModel />
    </S.Container>
  );
};
