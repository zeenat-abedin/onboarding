import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  & div {
    flex: 1;
  }
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CardContentDiv = styled.div`
  padding: 1rem;
  padding-left: 0;
  padding-top: 0;

  img {
    height: 20px;
    width: 20px;
    margin-bottom: 1rem;
    filter: grayscale(
      ${({ isActive }) => (isActive === "true" ? "0%" : "100%")}
    );
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.4;
  }
`;
