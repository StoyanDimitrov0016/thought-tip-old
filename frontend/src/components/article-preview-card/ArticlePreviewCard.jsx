import { Link } from "react-router-dom";

import {
  ArticleContainer,
  FooterContainer,
  HeaderContainer,
  SectionContainer,
  CustomLink,
} from "./article-preview-card.styles";

const ArticlePreviewCard = ({ article }) => {
  const {
    _id,
    author,
    title,
    preview,
    avgReadingTime,
    createdAt,
    topic,
  } = article;

  const publishDate = new Date(createdAt).toLocaleDateString();

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
              <CustomLink
                to={`/authors/${author._id}`}
              >{`${author.firstName} ${author.lastName}`}</CustomLink>
            </strong>
          </p>
          <p>
            Average Reading Time <strong>{avgReadingTime}</strong>
          </p>
        </div>
      </HeaderContainer>

      <SectionContainer aria-labelledby="content-preview">
        <h3 id="content-preview">Preview</h3>
        <CustomLink
          to={`/articles/${_id}`}
          aria-label={`Read more about ${title}`}
        >
          <p>{preview}</p>
        </CustomLink>
      </SectionContainer>

      <FooterContainer>
        <p>
          Topic <strong>{topic}</strong>
        </p>
        <time dateTime={createdAt}>Published on {publishDate}</time>
        <button>Add to Favs</button>
      </FooterContainer>
    </ArticleContainer>
  );
};

export default ArticlePreviewCard;
