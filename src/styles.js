import styled from "styled-components";

export const theme = {
  colors: {
    primary: "#664DE5",
    optionalText: "rgba(0, 0, 0, 0.4)",
    greyColor: "rgba(0, 0, 0, 0.07)",
  },
};

export const Container = styled.div`
  width: 33%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.4rem;

  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 920px) {
    width: 50%;
  }
  @media (max-width: 780px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
