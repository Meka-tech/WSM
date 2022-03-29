import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

const Container = styled.div`
  width: 250px;
  height: 350px;
  background-color: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 5px gray;
  ${mobile({ width: "100px", height: " 200px" })}
  ${tab({ width: "100px", height: " 200px" })}
`;
const Image = styled.img`
  position: relative;
  height: 500px;
  width: 220px;
  border-radius: 20px;
  margin: 0;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Description = styled.div`
  margin: 0;
  padding: 20px 0px;
  position: relative;
  width: 300px;
  height: 200px;
  margin-top: -100px;
  box-shadow: 2px 2px 5px gray;

  transform: translateY(80px);
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  border-radius: 25px;
  z-index: 1;
  &:hover {
    transform: translateY(40px);
  }
  ${mobile({
    height: "100px",
    padding: "10px  0px",
    transform: "translateY(0px)",
    marginTop: "-50px",
  })}
`;
const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #00adb5;
  ${mobile({ fontSize: "12px", marginBottom: "0px" })}
`;
const Position = styled.h3`
  color: #152238;
  ${mobile({ fontSize: "10px" })}
`;

const ImageCard = (props) => {
  return (
    <Container>
      <Image alt="team" src={props.image} />

      <Description>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </Description>
    </Container>
  );
};

export default ImageCard;
