import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  NavLogo,
  NavbarContainer,
  Nav,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import "./NavBar.style.css";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/">
            <Logo className="logo" src={require("../../Images/Logo.png")} />
          </Link>
        </NavLogo>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLinks> Home </NavLinks>{" "}
            </Link>
          </NavItem>
          <NavItem>
            <NavLinks> Events </NavLinks>{" "}
          </NavItem>
          <NavItem>
            <Link to="/about_us" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> About Us </NavLinks>{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> Contact Us </NavLinks>{" "}
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link to="/location" style={{ textDecoration: "none" }}>
              {" "}
              <NavLinks> Events </NavLinks>{" "}
            </Link>
          </NavItem> */}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
