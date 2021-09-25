import styled from "styled-components/";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width:480px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width:480px) {
    width: 100%;
    height: 100%;
  }
`;
export const Right = styled.div`
  width: 40%;

  @media only screen and (max-width:480px) {
    display: none;
  }
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 60px;

  @media only screen and (max-width:480px) {
    width: 100%;
  }
`;

export const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

export const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 40px;
  padding: 15px;
  background-color: #4e6bff;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width:480px) {
    margin-left: 35px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;

  @media only screen and (max-width:480px) {
    color: #fff;
  }
`;

export const ContactText = styled.span`
  color: grey;
  margin-top: 5px;

  @media only screen and (max-width:480px) {
    margin-bottom: 15px;
    color: #fff;
  }
`;

export const Image = styled.img`
margin-left: 15px;
  width: 100%;
  border-radius: 800px;
`;
