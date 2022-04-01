import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

export const Nav = styled.nav`
  background-color: #152238f5;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
  font-size: 20px;
  top: 0;
  box-shadow: 5px 5px 5px rgba(5, 5, 5, 0.5);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  ${mobile({ height: "60px" })}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;

  ${mobile({ marginLeft: "0px" })}
  ${tab({ marginLeft: "0px" })}
  h2 {
    font-size: 25px;
    color: white;
    font-weight: bold;
    ${mobile({ fontSize: "12px" })}
    ${tab({ fontSize: "20px" })}
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: auto;
  margin-bottom: 10%;
  transform: scale(2);
  margin-right: 50px;
  ${mobile({ transform: "scale(1.2)", marginRight: "20px" })}
  ${tab({ transform: "scale(1.5)" })}
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: darkgray;
    transform: scale(0.7);
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
// export const NavItem = styled.li`
//   height: 35px;
//   text-decoration: none;
// `;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  margin: 0.5rem 0.8rem;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.35s ease-in-out;

  &.active {
  }
  &:hover {
    background-color: #87ceeb;
    border-radius: 5px;
    color: #3c5c7e;
  }
`;
