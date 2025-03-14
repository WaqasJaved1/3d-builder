import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CanvasWrapper = styled.div<{ isSideBarOpen: boolean }>`
  width: ${({ isSideBarOpen }) =>
    isSideBarOpen ? "calc(100vw - 300px)" : "100%"};

  height: calc(100vh - 60px);
  border-right: 1px solid #e0e0e0;
`;

export const PropertiesWrapper = styled.div`
  width: 20vw;
  height: calc(100vh - 150px);
  padding: 20px;
`;
