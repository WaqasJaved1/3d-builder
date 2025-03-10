import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
`;

export const DropDown = styled.ul`
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;
  },
  `;

export const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
`;
