import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  background: var(--background);
  color: var(--text);
  padding: 2em;
  border-radius: 0.5em;
  margin: 1em auto;
  
  width: 100%; 
  max-width: 500px; 
`;

export const CreateArticleStyledForm = styled.form`
  background: var(--background);
  color: var(--text);
  padding: 2em;
  border-radius: 0.5em;
  margin: 1em auto;
  
  width: 100%;
`;


export const FieldSet = styled.fieldset`
  border: 1px solid var(--secondary);
  display: flex;
  flex-direction: column; 
  padding: 1em;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

export const Legend = styled.legend`
  font-size: 1.5em;
  color: var(--primary);
`;

export const Label = styled.label`
  font-size: 1em;
  color: var(--text);
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid var(--secondary);
  border-radius: 0.25em;
  background: var(--background);
  color: var(--text);
  font-size: 1em;
  margin-bottom: 1em; 

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const Button = styled.button`
  background: var(--accent);
  color: white;
  border: none;
  padding: 0.8em 1.6em;
  border-radius: 0.3em;
  cursor: pointer;
  margin: 0.5em;

  &:hover {
    background-color: darken(var(--accent), 10%);
  }
`;

export const ClearButton = styled(Button)`
  background: var(--secondary);
  &:hover {
    background-color: lighten(var(--secondary), 10%);
  }
`;

export const GoogleButton = styled.button`
  background-color: #4285F4;
  color: white;
  font-size: 1em;
  padding: 0.8em 1.6em;
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8;
  }

  &:focus {
    outline: none;
    border: 2px solid #2a65d6;
  }
`;

export const StyledParagraph = styled.p`
  color: var(--text);
  margin: 1em 0;
  font-size: 1em;
`;

export const StyledLink = styled(Link)`
  color: var(--accent);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: lighten(var(--accent), 10%);
  }
`;

export const Select = styled.select`
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--secondary);
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0.5em 0;

  &:hover {
    border-color: var(--primary);
  }
`;

export const Option = styled.option`
  color: var(--text);
  background: var(--secondary);
  padding: 0.5em;
`;

const BaseTextarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid var(--secondary);
  color: var(--text);
  background: var(--background);
  resize: vertical;
  outline: none;

  &:focus {
    border-color: var(--primary);
  }
`;

export const Textarea = styled(BaseTextarea)`
  height: 5em;
`;

export const ContentTextarea = styled(BaseTextarea)`
  height: 10em;
`;