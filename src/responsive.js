import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (max-width: 768px) and (min-width: none) {
      ${props}
    }
  `;
};
