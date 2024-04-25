import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ActionButton,
  ArticleContainer,
  AsideActions,
  AuthorInfo,
  ContentSection,
  FollowButton,
  Header,
  ProfilePicture,
  TagButton,
} from "./article-view.styles";

import articleService from "../../services/articleService";

const ArticleView = () => {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      const fetchedArticle = await articleService.getArticleById(articleId);
      console.log(fetchedArticle);
      setArticleData(fetchedArticle);
    };

    fetchArticleData();
  }, [articleId]);

  // console.log(articleData.preview)
  return (
    articleData && (
      <div>
        <ArticleContainer>
          <Header>
            <img src={articleData.thumbnail} alt={articleData.title} />
            <h1>{articleData.title}</h1>
            <AuthorInfo>
              <ProfilePicture
                src={articleData.author.profilePicture}
                alt={"author's profile pic"}
              />
              <span>
                {`${articleData.author.firstName} ${articleData.author.lastName}`}
              </span>
              <FollowButton>Follow</FollowButton>
            </AuthorInfo>
          </Header>

          <h2 id="article-preview">Preview</h2>
          <ContentSection aria-labelledby="article-preview">
            <p>{articleData.preview}</p>
          </ContentSection>

          <h2 id="article-preview">Content</h2>
          <ContentSection>{articleData.content}</ContentSection>

          <footer>
            {articleData.tags.map((tag) => (
              <TagButton key={tag}>{tag}</TagButton>
            ))}
          </footer>
        </ArticleContainer>
        <AsideActions>
          <ActionButton>Add to Favs</ActionButton>
          <ActionButton>Copy Link</ActionButton>
          {articleData.isUserLiked ? (
            <ActionButton>Like</ActionButton>
          ) : (
            <ActionButton disabled>Like</ActionButton>
          )}
          <span>{articleData.likesCount}</span>
          <ActionButton>Tip</ActionButton>
        </AsideActions>
      </div>
    )
  );
};

export default ArticleView;
