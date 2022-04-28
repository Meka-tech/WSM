import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({ width: "150px", height: " 250px" })}
  ${tab({ width: "250px", height: " 350px" })}
`;
const Picture = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 0;

  transition: all 0.2s ease-in-out;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  transform: scale(2);
`;

const Description = styled.div`
  margin: 0;
  padding: 10px 5px;
  position: relative;
  width: 85%;
  height: 200px;
  margin-top: 100%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;

  ${mobile({
    height: "50px",
    padding: "10px  0px",
    marginTop: "130%",
  })}
  ${tab({
    height: "100px",
    padding: "10px  0px",
    marginTop: "100%",
  })}
`;
const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #00adb5;
  ${mobile({ fontSize: "10px", marginBottom: "0px" })}
  ${tab({ fontSize: "14px", marginBottom: "0px" })}
`;
const Position = styled.h3`
  color: #152238;
  ${mobile({ fontSize: "10px" })}
  ${tab({ fontSize: "12px" })}
`;

const ImageCard = (props) => {
  return (
    <Container>
      <Picture>
        {" "}
        <Image alt="team" src={props.image} />{" "}
      </Picture>

      <Description>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </Description>
    </Container>
  );
};

export default ImageCard;
