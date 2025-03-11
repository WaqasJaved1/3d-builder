import type { FC } from "react";

import { Axis, Object3D } from "../../types";
import { ColorPicker } from "./color-picker";
import { PositionInput } from "./position-input";
import { PanelHeader } from "./header";
import { RotationInput } from "./rotation-input";
import { SizeInput } from "./size-input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  changeColor,
  changePosition,
  changeRotation,
  changeSize,
  deleteObject,
} from "../../state";

import * as S from "./elements";

interface Props {
  object: Object3D;
  setSelectedObjectId: (id: string) => void;
}
export const PropertiesPanel: FC<Props> = ({ object, setSelectedObjectId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleColorChange = (color: string) => {
    if (!object?.id) {
      return;
    }

    dispatch(
      changeColor({
        id: object?.id,
        color,
      })
    );
  };

  const handlePositionChange = (axis: Axis, value: number) => {
    if (!object?.id) {
      return;
    }

    dispatch(
      changePosition({
        id: object?.id,
        axis,
        value,
      })
    );
  };

  const handleRotationChange = (axis: Axis, value: number) => {
    if (!object?.id) {
      return;
    }

    dispatch(
      changeRotation({
        id: object?.id,
        axis,
        value,
      })
    );
  };

  const handleSizeChange = (index: number, value: number) => {
    if (!object?.id) {
      return;
    }

    dispatch(
      changeSize({
        id: object?.id,
        index,
        value,
      })
    );
  };

  const handleDelete = () => {
    if (!object?.id) {
      return;
    }

    dispatch(deleteObject(object?.id));
    setSelectedObjectId("");
  };

  const handleOnDone = () => {
    setSelectedObjectId("");
  };

  return (
    <S.PropertiesWrapper>
      <PanelHeader object={object} onDelete={handleDelete} />

      <ColorPicker color={object.color} onColorChange={handleColorChange} />

      <PositionInput
        position={object.position}
        onPositionChange={handlePositionChange}
      />

      <RotationInput
        rotation={object.rotation}
        setRotation={handleRotationChange}
      />

      <SizeInput object={object} onSizeChange={handleSizeChange} />

      <S.DoneButtonWrapper>
        <button onClick={handleOnDone}>Done</button>
      </S.DoneButtonWrapper>
    </S.PropertiesWrapper>
  );
};
