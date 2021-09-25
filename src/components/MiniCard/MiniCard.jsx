import React from "react";
// Style
import { Container, Image, Text} from "./style";
// Icon
import Search from "../../assets/search.png";

const MiniCard = () => {
  return (
    <>
      <Container>
        <Image src={Search} />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Container>
    </>
  );
};

export default MiniCard;
