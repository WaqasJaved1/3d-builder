import type { FC } from "react";

import * as S from "./elements";

interface Props {
  title: string;
  children: React.ReactNode;
}
export const PanelCard: FC<Props> = ({ title, children }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <div>{children}</div>
    </S.Wrapper>
  );
};
