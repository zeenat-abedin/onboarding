import styled from "styled-components";

export const StepLayoutContainer = styled.div`
  header {
    margin-bottom: 1.9rem;
    text-align: center;
    h2 {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 0.9rem;
      font-weight: 600;
      opacity: 0.4;
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const StepNumbersContainer = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: grey;
  margin-bottom: 3rem;

  display: flex;
  justify-content: space-evenly;

  div {
    height: 40px;
    width: 40px;
    border: 1px solid ${({ theme }) => theme.colors.greyColor};
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child)::after {
      content: "";
      background-color: ${({ theme }) => theme.colors.greyColor};
      width: 75%;
      height: 2px;
      position: absolute;
      left: 100%;
      @media (max-width: 1200px) {
        width: 60%;
      }
      @media (max-width: 780px) {
        width: 90%;
      }
      @media (max-width: 680px) {
        width: 75%;
      }
      @media (max-width: 580px) {
        width: 55%;
      }
      @media (max-width: 480px) {
        width: 50%;
      }
      @media (max-width: 370px) {
        width: 30%;
      }
    }
    &:not(:first-child)::before {
      content: "";
      background-color: ${({ theme }) => theme.colors.greyColor};
      width: 75%;
      height: 2px;
      position: absolute;
      right: 100%;
      @media (max-width: 1200px) {
        width: 60%;
      }
      @media (max-width: 780px) {
        width: 90%;
      }
      @media (max-width: 680px) {
        width: 75%;
      }
      @media (max-width: 580px) {
        width: 55%;
      }
      @media (max-width: 480px) {
        width: 50%;
      }
      @media (max-width: 370px) {
        width: 30%;
      }
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      &::after {
        background-color: ${({ theme }) => theme.colors.primary};
      }
      &::before {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
