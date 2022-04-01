import React from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  Icon,
  NavItem,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavItem>
            {" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
              onClick={toggle}
            >
              Home
            </Link>{" "}
            {/* <SidebarLink> Home</SidebarLink>{" "} */}
          </NavItem>
          <NavItem>
            <Link
              to="/events"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
              onClick={toggle}
            >
              Events
            </Link>
            {/* <SidebarLink> Events</SidebarLink>{" "} */}
          </NavItem>
          <NavItem>
            <Link
              to="/about_us"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
              onClick={toggle}
            >
              About Us
            </Link>
            {/* <SidebarLink> About Us</SidebarLink>{" "} */}
          </NavItem>
          <NavItem>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "600",
              }}
              onClick={toggle}
            >
              {" "}
              Contacts
            </Link>
            {/* <SidebarLink> Contacts</SidebarLink>{" "} */}
          </NavItem>

          {/* <Link
            to="/location"
            style={{ textDecoration: "none" }}
            onClick={toggle}
          >
            <SidebarLink> Location</SidebarLink>{" "}
          </Link> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
