import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
