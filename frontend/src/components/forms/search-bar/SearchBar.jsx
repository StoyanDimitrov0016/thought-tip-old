import styled from "styled-components";
import { useForm } from "../../../hooks/useForm";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5em;
  border: 1px solid var(--accent);
  border-radius: 0.25em;
  font-size: 1em;
  color: var(--text);

  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 0.5em 1em;
  background-color: var(--primary);
  color: var(--text);
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: darken(var(--primary), 10%);
  }
`;

const SearchBar = () => {
  const search = (formValues) => {
    console.log(formValues.searchValue);
  };

  const { searchValue, changeHandler, submitCallback } = useForm(
    { searchValue: "" },
    search
  );
  
  return (
    <SearchForm onSubmit={submitCallback}>
      <SearchInput
        type="text"
        name="searchValue"
        id="searchValue"
        placeholder="Search..."
        value={searchValue}
        onChange={changeHandler}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
