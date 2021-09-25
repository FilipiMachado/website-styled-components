import React from "react";
// Style
import {
  Container,
  PriceContainer,
  Price,
  Type,
  List,
  ListItem,
  Button,
} from "./style";

const PriceCard = ({ price, type }) => {
  return (
    <>
      <Container>
        <PriceContainer>
          $<Price>{price}</Price>/month
        </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
          <ListItem>200 Hand-Crafted Templates</ListItem>
          <ListItem>Exclusive Support</ListItem>
          <ListItem>50+ PreBuilt Websites</ListItem>
          <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now</Button>
      </Container>
    </>
  );
};

export default PriceCard;
