import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.6;
    padding-bottom: 10px;
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  input {
    padding: 12px 9px;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    outline: none;
    width: 100%;
  }

  input::placeholder {
    font-weight: 500;
    opacity: 0.6;
  }

  input:focus {
    border-color: #664de5;
    border-width: 2px;
  }

  span.optional_label_text {
    color: ${({ theme }) => theme.colors.optionalText};
    margin-left: 6px;
  }
`;

export const InputAddOnContainer = styled(InputGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5em;

  .field {
    flex: 1;
  }

  .item {
    background-color: rgba(0, 0, 0, 0.04);
    color: #666666;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 1rem;
    padding-right: 1rem;
    border-right: none;
  }
  .field:first-child,
  .item:first-child {
    border-radius: 3px 0 0 3px;
  }
  .field:last-child,
  .item:last-child {
    border-radius: 0 3px 3px 0;
  }

  @media (max-width: 480px) {
    .item {
      flex: 1;
    }
  }
`;
