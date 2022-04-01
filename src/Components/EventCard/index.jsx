import React from "react";
import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mobile, tab } from "../../responsive";
const Container = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px gray;
  height: fit-content;
  border-radius: 25px;
  width: 500px;
  height: 500px;
  overflow: hidden;
  ${mobile({ width: "290px", height: "fit-content" })}
`;

const Image = styled.img`
  position: relative;
  object-fit: cover;
  width: 500px;
  height: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${mobile({ width: "290px", height: "300px" })}
`;

const Text = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  padding: 0px 10px;
  justify-content: center;
  margin-top: 10px;
  padding-bottom: 15px;
  ${mobile({ padding: "0px 5px", paddingBottom: "10px" })}
`;
const Details = styled.div`
  padding: 0px 20px;
  width: 50%;
  ${mobile({ padding: "0px 5px", width: "80%" })}
`;

const Description = styled.div`
  text-align: left;
  padding: 0px 20px;
  ${mobile({ padding: "0px 10px" })}
`;

const Section = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  ${mobile({ padding: "0px" })}
`;

const Icon = styled.div`
  margin-right: 5px;
  color: #00adb5;
  ${mobile({ transform: "scale(0.6)" })}
`;
const Vl = styled.div`
  border-left: solid 2px #00adb5;
  width: 0;
  height: 120px;
  ${mobile({ height: "80px" })}
`;
const Header = styled.h2`
  margin-bottom: 10px;
  color: #152238;
  font-weight: bold;
  font-size: 20px;
  ${mobile({ fontSize: "15px", marginBottom: "5px" })}
`;

const Content = styled.p`
  color: #033c3f;
  font-size: 12px;
  ${mobile({ fontSize: "9px" })}
`;

const Event = (props) => {
  return (
    <Container>
      <Image src={props.image} />
      <Text>
        <Details>
          <Section>
            {" "}
            <Icon>
              {" "}
              <CalendarMonthIcon />
            </Icon>
            <Content> {props.day}</Content>
          </Section>
          <Section>
            <Icon>
              <ScheduleIcon />
            </Icon>
            <Content> {props.time}</Content>
          </Section>
          <Section>
            {" "}
            <Icon>
              {" "}
              <LocationOnIcon />
            </Icon>
            <Content> {props.location}</Content>
          </Section>
        </Details>
        <Vl></Vl>
        <Description>
          <Header>{props.header}</Header>
          <Content>{props.description}</Content>
        </Description>
      </Text>
    </Container>
  );
};

export default Event;
