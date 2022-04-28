import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
import Slider from "../../Components/Slider";
import { carouselItem, eventItem } from "../../Data";
import Event from "../../Components/EventCard";

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
  margin: 0px 5px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "16px", margin: "0px 2.5px" })}

  &:hover {
    color: #00adb5;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodyHeading = styled.div`
  margin: 50px 0px;
  ${mobile({ margin: "25px 0px" })}
`;

const BodyHeader = styled.h1`
  font-size: 25px;
  color: #00adb5;
  margin: 20px 0px;
  ${mobile({ fontSize: "13px", margin: "5px 0px" })}
`;

const BodySubHeader = styled.h1`
  font-size: 35px;
  color: #152238;
  margin: 0px 20px;
  font-weight: 800;
  ${mobile({ fontSize: "18px", margin: "5px 0px" })}
`;
const Carousel = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  padding-bottom: 25px;
  ${mobile({ width: "80vw", paddingBottom: "60px" })}
`;
const EventBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeaderDiv>
        <Header>Events</Header>
        <BreadCrumb>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Crumb>Home </Crumb>
          </Link>{" "}
          <Crumb> / </Crumb> <Crumb> Events</Crumb>
        </BreadCrumb>
      </HeaderDiv>
      <Body>
        <BodyHeading>
          <BodyHeader>Previous Events</BodyHeader>
          <BodySubHeader>
            Pictures taken at previously held events
          </BodySubHeader>
        </BodyHeading>
        <Carousel>
          <Slider item={eventItem} amount="9" />
        </Carousel>
        <EventBody>
          <BodyHeader>Upcoming Events</BodyHeader>
          <BodySubHeader>
            Be ready for our upcoming charity events
          </BodySubHeader>
          <Event
            day="01-Jan-22"
            time="8:00 - 10:00"
            location="Enugu"
            header=" Lorem ipsum dolor sit"
            description=" Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor "
            image={require("../../Images/events.jpg")}
          />
        </EventBody>
      </Body>

      <Footer />
    </div>
  );
};

export default Events;
