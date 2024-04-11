import { Link } from "react-router-dom";

import {
  ArticleContainer,
  FooterContainer,
  HeaderContainer,
  SectionContainer,
  CustomLink,
} from "./ArticlePreview.styles";

const ArticlePreview = ({ article }) => {
  const {
    _id,
    authorId,
    title,
    author,
    avgReadingDuration,
    contentPreview,
    createdAt,
    topic,
  } = article;

  const creationDate = new Date(createdAt).toLocaleDateString();

  return (
    <ArticleContainer>
      <HeaderContainer>
        <h2>
          <Link to={`/articles/${_id}`} aria-label={`Read more about ${title}`}>
            {title}
          </Link>
        </h2>
        <div>
          <p>
            Author
            <strong>
              <CustomLink to={`/authors/${authorId}`}>{author}</CustomLink>
            </strong>
          </p>
          <p>
            Average Reading Time <strong>{avgReadingDuration} minutes</strong>
          </p>
        </div>
      </HeaderContainer>

      <SectionContainer aria-labelledby="content-preview">
        <h3 id="content-preview">Preview</h3>
        <CustomLink
          to={`/articles/${_id}`}
          aria-label={`Read more about ${title}`}
        >
          <p>{contentPreview}</p>
        </CustomLink>
      </SectionContainer>

      <FooterContainer>
        <p>
          Topic <strong>{topic}</strong>
        </p>
        <time dateTime={createdAt}>Published on {creationDate}</time>
        <button>Add to Favs</button>
      </FooterContainer>
    </ArticleContainer>
  );
};

export default ArticlePreview;
