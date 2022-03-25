import styled, { css } from "styled-components";
import { mobile } from "../../responsive";

export const TableHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StylizedTab = styled.button`
  color: #152238;
  width: 100%;
  padding: 20px 0px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  ${mobile({ fontSize: "12px", padding: "12px 0px" })}
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  transition: all 0.3s ease-in-out;
  ${(p) =>
    p.active &&
    css`
      /* color: #00adb5; */
      color: white;
      background-color: #152238;
    `}
`;
export const StylizedTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 32px;

  background-color: #152238;
  flex-direction: column;
  color: white;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  padding: 30px;
  border-radius: 10px;
  ${mobile({ padding: "16px" })}
`;

export const TabHolder = styled.div`
  display: flex;
`;

export const inactiveTab = {
  opactity: 0.65,
};
