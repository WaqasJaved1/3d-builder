import type { FC } from "react";
import { PanelCard } from "../../../ui/panel-card";
import { Axis, Rotation } from "../../../types";
import { degreesToRadian, radianToDegrees } from "../../../utils";

export type OnRotationChange = (axis: Axis, value: number) => void;

interface Props {
  rotation: Rotation;
  setRotation: OnRotationChange;
}
export const RotationInput: FC<Props> = ({ rotation, setRotation }) => {
  const handleRotationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    axis: Axis
  ) => {
    setRotation(axis, degreesToRadian(parseInt(e.target.value)));
  };

  return (
    <PanelCard title="Set rotation">
      <div>
        <div>
          <label>X Rotation: </label>
          <input
            type="range"
            min={0}
            max={360}
            value={radianToDegrees(rotation.x)}
            onChange={(e) => handleRotationChange(e, "x")}
            step="1"
          />
          <span>{Math.round(radianToDegrees(rotation.x))}°</span>
        </div>

        {/* Slider for Y axis rotation */}
        <div>
          <label>Y Rotation: </label>
          <input
            type="range"
            min={0}
            max={360}
            value={radianToDegrees(rotation.y)}
            onChange={(e) => handleRotationChange(e, "y")}
            step="1"
          />
          <span>{Math.round(radianToDegrees(rotation.y))}°</span>
        </div>

        {/* Slider for Z axis rotation */}
        <div>
          <label>Z Rotation: </label>
          <input
            type="range"
            min={0}
            max={360}
            value={radianToDegrees(rotation.z)}
            onChange={(e) => handleRotationChange(e, "z")}
            step="1"
          />
          <span>{Math.round(radianToDegrees(rotation.z))}°</span>
        </div>
      </div>
    </PanelCard>
  );
};
