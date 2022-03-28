import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

const Container = styled.div``;
const Body = styled.div``;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
  margin-bottom: 50px;
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(#404040, black);
  ${mobile({ height: "15vh", marginBottom: "20px" })}
`;

const Header = styled.h1`
  color: #00adb5;
  font-size: 50px;
  margin-bottom: 10px;
  ${mobile({ fontSize: "30px", marginBottom: "0px" })}
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Crumb = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "16px" })}

  &:hover {
    color: #00adb5;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  color: #00adb5;
  margin: 20px 0px;
  ${mobile({ fontSize: "15px", margin: "5px 0px" })}
`;
const Details = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
  ${mobile({ margin: "10px 0px" })}
`;

const Icon = styled.div`
  margin-right: 10px;
  color: black;
  ${mobile({ transform: "scale(0.6) ", marginRight: "3px" })}
`;

const Content = styled.p`
  font-size: 18px;
  color: black;
  margin: 0;
  ${mobile({ fontSize: "10px", marginLeft: "0px" })}
`;

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Container>
        <HeaderDiv>
          <Header>Contact Us</Header>
          <BreadCrumb>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <Crumb>Home </Crumb>
            </Link>{" "}
            <Crumb> / </Crumb> <Crumb> Contact Us</Crumb>
          </BreadCrumb>
        </HeaderDiv>
        <Body>
          <Title>Our Head Office</Title>
          <Details>
            <Item>
              <Icon>
                <LocationOnOutlinedIcon />
              </Icon>
              <Content>
                plot 14,Onyeji street,Republic Estate Ext, Independence Layout,
                Enugu
              </Content>
            </Item>
            <Item>
              <Icon>
                <CallOutlinedIcon />
              </Icon>
              <Content> 08038261101</Content>
            </Item>
            <Item>
              <Icon>
                <MailOutlineIcon />
              </Icon>{" "}
              <Content>windowsuccourministry@gmail.com</Content>
            </Item>
          </Details>
        </Body>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
