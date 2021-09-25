import React from "react";
// Style
import {
  Container,
  Wrapper,
  FormContainer,
  AddressContainer,
  NewForm,
  LeftForm,
  RightForm,
  Input,
  TextArea,
  Button,
  Title,
  AddressItem,
  Icon,
  Text,
} from "./style";
// Icons
import Map from "../../assets/map.png";
import Phone from "../../assets/phone.png";
import Send from "../../assets/send.png";

const Contact = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Title>
              Questions? <br /> Let's Get In Touch
            </Title>
            <NewForm>
              <LeftForm>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
                <Input placeholder="Subject" />
              </LeftForm>
              <RightForm>
                <TextArea placeholder="Your Message" />
                <Button>Send</Button>
              </RightForm>
            </NewForm>
          </FormContainer>
          <AddressContainer>
            <AddressItem>
              <Icon src={Map} />
              <Text>123 Park Avenue St., New York, USA</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Phone} />
              <Text>+1 631 1234 5678</Text>
              <Text>+1 326 1234 5678</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Send} />
              <Text>fildev@fil.dev</Text>
              <Text>sales@fil.dev</Text>
            </AddressItem>
          </AddressContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;
