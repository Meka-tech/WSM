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

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/">
            <Logo src={require("../../Images/Logo.png")} />
          </Link>
          <h2>Widows Succour Ministry</h2>
        </NavLogo>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "inherit",
              }}
            >
              Home
            </Link>
            {/* <NavLinks> Home </NavLinks>{" "} */}
          </NavItem>
          <NavItem>
            <Link
              to="/events"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "600",
              }}
            >
              Events
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/about_us"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "600",
              }}
            >
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "600",
              }}
            >
              Contact Us
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
