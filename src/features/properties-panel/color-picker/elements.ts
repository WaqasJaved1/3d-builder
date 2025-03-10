import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  zindex: 2;
`;

export const StyledButton = styled.button`
  display: flex;
  gap: 8px;
`;

export const ColorBlock = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;
