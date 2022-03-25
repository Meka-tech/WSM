import React, { useEffect, useState } from "react";

import {
  Container,
  Wrapper,
  Slide,
  ImageContainer,
  InfoContainer,
  Image,
} from "./sliderElement";
import { carouselItem } from "../../Data";
const Slider = () => {
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
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow> */}
      <Wrapper slideIndex={slideIndex}>
        {carouselItem.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <InfoContainer>
                {/* <Button>About us</Button> */}
                {/* <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc> */}
              </InfoContainer>
              <Image src={item.img} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow> */}
    </Container>
  );
};

export default Slider;
