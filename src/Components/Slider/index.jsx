import React, { useEffect, useState } from "react";

import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";

import {
  Container,
  Wrapper,
  Slide,
  ImageContainer,
  InfoContainer,
  Arrow,
  Image,
} from "./sliderElement";
import { carouselItem } from "../../Data";
const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const autoSlide = () => {
    setTimeout(handleClick("right"), 2000);
  };
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      handleClick("right");
    }, 8000);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {props.item.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <InfoContainer></InfoContainer>
              <Image src={item.img} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
