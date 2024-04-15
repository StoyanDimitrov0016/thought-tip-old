import styled from "styled-components";

export const SearchBarFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--accent);
    border-radius: 4px;
    font-size: 1rem;
    color: var(--background);

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
