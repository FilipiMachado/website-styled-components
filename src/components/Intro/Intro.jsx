import React from "react";
// Components - Animation
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";
// Styles
import {
  Container,
  Left,
  Right,
  Title,
  Desc,
  Info,
  Button,
  Contact,
  Phone,
  ContactText,
  Image,
} from "./style";
// Images
import Woman from "../../assets/woman.png";

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Amazing Website</Title>
        <Desc>
          We believe that designing products and services in close partnership
          are amazing.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any questions please contact us</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
