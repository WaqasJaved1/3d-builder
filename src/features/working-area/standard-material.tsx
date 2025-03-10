import { useMemo, type FC } from "react";
import { Object3D } from "../../types";

interface Props {
  object: Object3D;
  isHovered: boolean;
  isSelected: boolean;
}
export const StandardMaterial: FC<Props> = ({
  object,
  isHovered,
  isSelected,
}) => {
  const color = useMemo(() => {
    if (isHovered && !isSelected) {
      return "hotpink";
    }

    return object.color;
  }, [isHovered, isSelected, object.color]);

  return <meshStandardMaterial color={color} opacity={1} />;
};
