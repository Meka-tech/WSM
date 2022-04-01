import styled from "styled-components";
import { mobile } from "../../responsive";
import { tab } from "../../responsive";

export const Container = styled.div`
  margin-top: 100px;
  padding: 50px 0px;
  background-color: #152239;
  width: 100vw;
  height: 40vh;
  ${mobile({ height: "fit-content", padding: "25px 10px", marginTop: "70px" })}
  ${tab({ height: "fit-content" })}
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 25px 100px;
  ${mobile({ flexDirection: "column", padding: "0" })}
  ${tab({ flexDirection: "column", padding: "0" })}
`;

export const Information = styled.div`
  margin: 0 30px;
  flex: 2;
  align-content: flex-start;
  ${mobile({ margin: " 0px 10px" })}
`;

export const PopularLinks = styled.div`
  align-content: flex-end;
  margin: 0 20px;
  flex: 1;
  ${mobile({ margin: " 0px 10px" })}
`;
export const FooterItem = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
  ${mobile({ margin: "10px 0px" })}
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: lightblue;
  ${mobile({ fontSize: "14px" })}
`;
export const Content = styled.p`
  font-size: 15px;
  color: white;
  margin: 0;
  ${mobile({ fontSize: "10px" })}
`;
export const Icon = styled.div`
  margin-right: 10px;
  color: white;
  ${mobile({ transform: "scale(0.6) ", marginRight: "3px" })}
`;

export const Footerlink = styled.div`
  font-size: 15px;
  color: white;
  text-align: left;

  transition: all 0.2s ease;
  cursor: pointer;
  ${mobile({ fontSize: "10px", transform: "scale(0.65)" })}
  &:hover {
    color: lightblue;
    font-size: 17px;
    font-stretch: extra-expanded;
  }
`;
export const HR = styled.hr`
  color: white;
  width: 60%;
`;
