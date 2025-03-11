import type { FC } from "react";
import { Object3D } from "../../../types";
import { PanelCard } from "../../../ui";
import { GeometryArgs } from "../../../consts";

export type OnSizeChange = (index: number, value: number) => void;

interface Props {
  object: Object3D;
  onSizeChange: OnSizeChange;
}
export const SizeInput: FC<Props> = ({ object, onSizeChange }) => {
  const geometryArgs = GeometryArgs[object.type];

  const handleOnChange = (index: number, value: number) => {
    let newValue = value;
    // min and max size
    if (value < geometryArgs[index].min) {
      newValue = geometryArgs[index].min;
    } else if (value > geometryArgs[index].max) {
      newValue = geometryArgs[index].max;
    }

    onSizeChange(index, newValue);
  };

  return (
    <PanelCard title="Size">
      {geometryArgs.map((arg, index) => (
        <div key={arg.id}>
          <label>{arg.label}: </label>
          <input
            type="number"
            value={object.size[index]}
            onChange={(e) => handleOnChange(index, parseFloat(e.target.value))}
            step="0.1"
            min={arg.min}
            max={arg.max}
          />
        </div>
      ))}
    </PanelCard>
  );
};
