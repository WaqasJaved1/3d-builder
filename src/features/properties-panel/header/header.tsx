import type { FC } from "react";
import { Object3D } from "../../../types";
import * as S from "./elements";

interface Props {
  object: Object3D;
}
export const PanelHeader: FC<Props> = ({ object }) => {
  return (
    <S.Wrapper>
      <S.Title>{object.type}</S.Title>
    </S.Wrapper>
  );
};
