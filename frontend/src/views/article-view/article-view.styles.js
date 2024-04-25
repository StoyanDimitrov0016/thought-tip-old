import styled from "styled-components";

export const ArticleContainer = styled.article`
  max-width: 800px;
  margin: auto;
  background: gray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FollowButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ContentSection = styled.section`
  margin-top: 20px;
`;

export const TagButton = styled.button`
  background-color: #4caf50;
  border: none;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

export const AsideActions = styled.aside`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
