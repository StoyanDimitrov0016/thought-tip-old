import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
