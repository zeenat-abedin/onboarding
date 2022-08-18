import styled from "styled-components";

export const CustomButton = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 800;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyColor};
    color: grey;
    cursor: not-allowed;
  }
`;
