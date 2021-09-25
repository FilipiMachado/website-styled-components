import React, { useState } from "react";
// Components
import MiniCard from "../MiniCard/MiniCard";
// Styles
import {
  Container,
  Left,
  Image,
  Right,
  Wrapper,
  Title,
  Description,
  CardContainer,
  Button,
  Icon,
  Video,
  Modal,
  CloseButton,
} from "./style";
// Image
import How from "../../assets/how.png";
import Play from "../../assets/play.png";

const Service = () => {
  const [open, setOpen] = useState(false);

  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container>
        <Left>
          <Image open={open} src={How} />
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://vimeo.com/384822055"
          />
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              fugit dignissimos nesciunt ullam, culpa maiores commodi ea omnis
              quis quidem iusto molestias, officiis modi quaerat delectus
              quibusdam alias libero distinctio?
            </Description>
            <CardContainer>
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </CardContainer>
            <Button onClick={() => setOpen(true)}>
              <Icon src={Play} />
              How it Works
            </Button>
          </Wrapper>
        </Right>
        {smallScreen && open && (
          <Modal>
            <Video
              open={open}
              autoPlay
              loop
              controls
              src="https://vimeo.com/384822055"
            />
            <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Service;
