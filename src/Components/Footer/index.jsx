import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

import {
  Container,
  Wrapper,
  Information,
  Title,
  Content,
  PopularLinks,
  Icon,
  Footerlink,
  FooterItem,
  HR,
} from "./footerElement";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Information>
          <Title>Our Head Office</Title>
          <FooterItem>
            <Icon>
              <LocationOnOutlinedIcon />
            </Icon>
            <Content>
              plot 14,Onyeji street,Republic Estate Ext, Independence Layout,
              Enugu
            </Content>
          </FooterItem>
          <FooterItem>
            <Icon className="icon">
              <CallOutlinedIcon />
            </Icon>
            <Content> 08038261101</Content>
          </FooterItem>
          <FooterItem>
            <Icon>
              <MailOutlineIcon />
            </Icon>{" "}
            <Content>windowsuccourministry@gmail.com</Content>
          </FooterItem>
        </Information>
        <PopularLinks>
          <Title>Popular Links</Title>
          <FooterItem>
            <Icon>
              <InfoOutlinedIcon />
            </Icon>{" "}
            <Footerlink> about us</Footerlink>
          </FooterItem>
          <FooterItem>
            <Icon>
              <PermContactCalendarOutlinedIcon />
            </Icon>
            <Footerlink>contact us</Footerlink>
          </FooterItem>
          <FooterItem>
            <Icon>
              {" "}
              <EventNoteOutlinedIcon />
            </Icon>{" "}
            <Footerlink> Events</Footerlink>
          </FooterItem>
        </PopularLinks>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default Footer;
