import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "auto", width: "100vw" })}
  ${tab({ height: "auto" })}
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;

  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({ height: "20px", width: "20px" })}
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  display: block;
  width: 100vw;
  height: 90vh;
  position: relative;
  ${mobile({ height: "auto" })}
  ${tab({ height: "auto" })}
`;
export const ImageContainer = styled.div`
  height: 100%;
  position: relative;
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "auto", width: "100%" })}
  ${tab({ height: "auto", width: "100%" })}
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;

  text-align: center;
  transition: all 0.2s ease;
`;
export const Title = styled.h1`
  padding-top: 35vh;
  font-size: 45px;
  font-weight: 600;
  ${mobile({ fontSize: "20px", paddingTop: " 100px" })}
  ${tab({ fontSize: "35px" })}
`;
export const Desc = styled.p`
  padding-top: 45vh;
  position: absolute;
  font-size: 30px;
  letter-spacing: 3px;
  ${mobile({ fontSize: "12px", paddingTop: " 150px" })}
  ${tab({ fontSize: "20px" })}
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  transition: all 1s ease;
  &:hover {
    margin-left: 15px;
    color: black;
    background-color: white;
    transition: all 0.5s ease;
  }
`;
