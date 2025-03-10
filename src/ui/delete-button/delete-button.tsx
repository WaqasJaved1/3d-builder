import type { FC } from "react";
import * as S from "./elements";

interface Props {
  onClick: () => void;
}
export const DeleteButton: FC<Props> = ({ onClick }) => {
  return <S.StyledButton onClick={onClick}>Delete</S.StyledButton>;
};
