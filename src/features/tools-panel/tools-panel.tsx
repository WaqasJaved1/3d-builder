import type { FC } from "react";
import { createNewGeometry } from "../../utils";
import { Object3DTypes } from "../../types";
import { addObject } from "../three-d-objects";
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
    addGeometry("rectangle");
  };

  const addCircle = () => {
    addGeometry("circle");
  };

  const addCylinder = () => {
    addGeometry("cylinder");
  };

  return (
    <S.Container>
      <button onClick={addSquare}>Rectangle</button>
      <button onClick={addCircle}>Circle</button>
      <button onClick={addCylinder}>Cylinder</button>
      <ImportThreeDModel />
    </S.Container>
  );
};
