import { useMemo, type FC } from "react";
import { Object3D } from "../../types";

interface Props {
  object: Object3D;
  isHovered: boolean;
  isSelected: boolean;
  isGhost: boolean;
}
export const StandardMaterial: FC<Props> = ({
  object,
  isHovered,
  isSelected,
  isGhost,
}) => {
  const color = useMemo(() => {
    if (isHovered && !isSelected) {
      return "hotpink";
    }

    return object.color;
  }, [isHovered, isSelected, object.color]);

  return (
    <meshStandardMaterial
      color={color}
      opacity={isGhost ? 0.5 : 1}
      transparent
    />
  );
};
