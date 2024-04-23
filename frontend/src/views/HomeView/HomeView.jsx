import { useEffect, useState } from "react";

import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import articleService from "../../services/articleService";

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
    <main>
      <section>
        {articles &&
          articles.length > 0 &&
          articles.map((article) => (
            <ArticlePreview key={article._id} article={article} />
          ))}
      </section>
    </main>
  );
};

export default HomeView;
