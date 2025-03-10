import type { FC } from "react";

import { Object3D } from "../../types";
import { ColorPicker } from "./color-picker";
import { OnPositionChange, PositionInput } from "./position-input";
import { PanelHeader } from "./header";
import { OnRotationChange, RotationInput } from "./rotation-input";
import { OnSizeChange, SizeInput } from "./size-input";

interface Props {
  object?: Object3D;
  onColorChange: (color: string) => void;
  onPositionChange: OnPositionChange;
  onRotationChange: OnRotationChange;
  onSizeChange: OnSizeChange;
  onDelete: () => void;
}
export const PropertiesPanel: FC<Props> = ({
  object,
  onColorChange,
  onPositionChange,
  onRotationChange,
  onSizeChange,
  onDelete,
}) => {
  if (!object) {
    return <div>No object selected</div>;
  }

  return (
    <div>
      <PanelHeader object={object} onDelete={onDelete} />

      <ColorPicker color={object.color} onColorChange={onColorChange} />

      <PositionInput
        position={object.position}
        onPositionChange={onPositionChange}
      />

      <RotationInput
        rotation={object.rotation}
        setRotation={onRotationChange}
      />

      <SizeInput object={object} onSizeChange={onSizeChange} />
    </div>
  );
};
