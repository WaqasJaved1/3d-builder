import type { FC } from "react";
import { Object3D } from "../../../types";
import * as S from "./elements";
import { DeleteButton } from "../../../ui";

interface Props {
  object: Object3D;
  onDelete: () => void;
}
export const PanelHeader: FC<Props> = ({ object, onDelete }) => {
  return (
    <S.Wrapper>
      <S.Title>{object.type}</S.Title>
      <DeleteButton onClick={onDelete} />
    </S.Wrapper>
  );
};
