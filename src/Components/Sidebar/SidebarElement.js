import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #152238;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : 0)};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: darkgray;
  transform: scale(0.9);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  margin-left: 0;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding-left: 0;
`;

export const SidebarLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: white;
  font-size: 25px;
  font-weight: 600;
  transition: 0.2s ease-in-out;

  ${tab({ fontSize: "25px" })}
  ${mobile({ fontSize: "16px" })}
`;
export const NavItem = styled.li``;
