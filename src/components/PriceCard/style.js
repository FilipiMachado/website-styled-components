import styled from "styled-components";

export const Container = styled.div`
  margin-right: 25px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 5px;
    padding: 5px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 45px;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid crimson;
  color: crimson;
  background-color: #fff;
  border-radius: 20px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 25px 0;

  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #4e6bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5;
  }
`;
