import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Tab from "../../Components/Tabs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
import ImageCard from "../../Components/ImageCard";

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
const Team = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeaderDiv>
        <Header>About Us</Header>
        <BreadCrumb>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Crumb>Home </Crumb>
          </Link>{" "}
          <Crumb> / </Crumb> <Crumb> About Us</Crumb>
        </BreadCrumb>
      </HeaderDiv>

      <Tab />
      <Team>
        <ImageCard
          name="Mrs Gertrude Onyeji"
          position="Founder"
          image={require("../../Images/mummy.jpg")}
        />
      </Team>
      <Footer />
    </div>
  );
};
export default AboutUs;
