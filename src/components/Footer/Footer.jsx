import React from "react";
// Style
import { Container, Wrapper, List, ListItem, Copyright } from "./style";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <List>
            <ListItem>Guide</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>API</ListItem>
            <ListItem>Community</ListItem>
          </List>
          <Copyright>Fil Dev &copy;</Copyright>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
