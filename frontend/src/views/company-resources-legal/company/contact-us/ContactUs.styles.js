import styled from "styled-components";

export const ContactSection = styled.section`
  background-color: var(--background);
  color: var(--text);
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContactHeader = styled.header`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;

  h2 {
    color: var(--primary);
  }

  p {
    color: var(--text);
    margin: 5px 0;
  }
`;