import type { FC } from "react";
import { PanelCard } from "../../../ui/panel-card";
import { Axis, Position } from "../../../types";

export type OnPositionChange = (axis: Axis, value: number) => void;

interface Props {
  position: Position;
  onPositionChange: OnPositionChange;
}
export const PositionInput: FC<Props> = ({ position, onPositionChange }) => {
  // Handle input changes for x, y, z coordinates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, axis: Axis) => {
    onPositionChange(axis, parseFloat(e.target.value));
  };

  return (
    <PanelCard title="Set position">
      {/* Input fields for x, y, z position */}
      <div>
        <label>X Position: </label>
        <input
          type="number"
          value={position.x}
          onChange={(e) => handleChange(e, "x")}
          step="0.1"
        />
      </div>
      <div>
        <label>Y Position: </label>
        <input
          type="number"
          value={position.y}
          onChange={(e) => handleChange(e, "y")}
          step="0.1"
        />
      </div>
      <div>
        <label>Z Position: </label>
        <input
          type="number"
          value={position.z}
          onChange={(e) => handleChange(e, "z")}
          step="0.1"
        />
      </div>
    </PanelCard>
  );
};
