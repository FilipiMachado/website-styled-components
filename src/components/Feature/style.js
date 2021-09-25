import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width:480px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;

  @media only screen and (max-width:480px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 90%;
  border-radius: 50%;
`;

export const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width:480px) {
    font-size: 40px;
    margin-left: 10px;
  }
`;
export const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;

  @media only screen and (max-width:480px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;

  @media only screen and (max-width:480px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: #4e6bff;
  color: #fff;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;

  @media only screen and (max-width:480px) {
    width: 120px;
    font-size: 12px;
    margin-left: 10px;
  }
`;
