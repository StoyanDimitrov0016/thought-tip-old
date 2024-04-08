import styled from "styled-components";


export const CardWrapper = styled.div`
  /* background-color: #f5f5f5; */
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const CardContainer = styled.section`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
 
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  flex: 0 0 auto;
  text-align: right;
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const CardValue = styled.p`
  font-weight: bold;
`;
