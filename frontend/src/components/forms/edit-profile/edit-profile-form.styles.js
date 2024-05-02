import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.h2``;

export const InfoText = styled.p`
  margin: 10px 0;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: var(--secondary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--secondary);
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: var(--accent);
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background-color: var(--secondary);
`;
