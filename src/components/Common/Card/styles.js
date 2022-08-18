import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid
    ${({ isActive, theme }) =>
      isActive === "true" ? theme.colors.primary : theme.colors.greyColor};
  border-radius: 5px;
  padding: 1.4rem;
`;
