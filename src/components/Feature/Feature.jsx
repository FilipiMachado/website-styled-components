import React from "react";
// Components
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";
// Style
import {
  Container,
  Left,
  Image,
  Right,
  Title,
  SubTitle,
  Description,
  Button,
} from "./style";
// Images
import App from "../../assets/app.png";

const Feature = () => {
  return (
    <>
      <Container>
        <Left>
          <Image src={App} />
        </Left>
        <Right>
          <Title>
            <strong>good</strong> design
            <br />
            <strong>good</strong> business
          </Title>
          <SubTitle>We know that good design means good business</SubTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            veniam blanditiis voluptatibus eaque ad, consequatur tempora dicta
            necessitatibus ipsam! Maiores qui debitis alias maxime nobis illum
            veritatis obcaecati eos tenetur.
          </Description>
          <Description>
            Maiores qui debitis alias maxime nobis illum veritatis obcaecati eos
            tenetur.
          </Description>
          <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
      </Container>
    </>
  );
};

export default Feature;
