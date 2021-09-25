import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 18%;
  border-radius: 50%;
  margin-top: 65px;
  margin-left: 5px;
`;

export const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  width: 120px;
  border: none;
  border-radius: 10px;
  background-color: #4e6bff;
  color: #fff;
  font-size: 18px;
  padding: 15px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-left: 94px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: blank;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: crimson;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 100%;
`