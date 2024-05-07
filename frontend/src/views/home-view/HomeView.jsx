import { useEffect, useState } from "react";
import { StyledHomeSection } from "./home-view.styles";
import articleService from "../../services/articleService";
import ArticlePreviewCard from "../../components/article-preview-card/ArticlePreviewCard";

const HomeView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await articleService.getAllArticles();
      setArticles(fetchedArticles);
    };
    loadArticles();
  }, []);

  return (
    <StyledHomeSection>
      {articles &&
        articles.length > 0 &&
        articles.map((article) => (
          <ArticlePreviewCard key={article._id} article={article} />
        ))}
    </StyledHomeSection>
  );
};

export default HomeView;
