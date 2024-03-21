import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticlePreviewStyled = styled.article`
  width: 70%;
  background-color: #f0944f;
  color: #0d0d0d;
  border: 1px solid #72798f;
  padding: 20px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #29292c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  margin-left: 10px;
  color: #eff0f3;
  opacity: 0.75;
`;

const Excerpt = styled.p`
  margin-top: 10px;
  color: #eff0f3;
`;

const ArticlePreview = ({ article }) => {
  const { id, title, author, date, excerpt } = article;

  return (
    <ArticlePreviewStyled>
      <Title>
        <StyledLink to={`/article/${id}`}>{title}</StyledLink>
      </Title>
      <div>
        <Author>{author}</Author>
        <Date>{date}</Date>
      </div>
      <Excerpt>{excerpt}</Excerpt>
    </ArticlePreviewStyled>
  );
};

export default ArticlePreview;
